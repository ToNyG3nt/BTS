const EventEmitter = require('events');

class Parser extends EventEmitter {
    constructor() {
        super();
        this.fragments = new Map();
    }

    parse(buffer) {
        if (buffer.length < 12) return;

        const commandCount = buffer.readUInt8(3);
        let offset = 12;

        for (let i = 0; i < commandCount; i++) {
            if (offset + 12 > buffer.length) break;

            const commandType = buffer.readUInt8(offset);
            const commandLength = buffer.readUInt32BE(offset + 4);
            
            if (offset + commandLength > buffer.length || commandLength < 12) break;

            const payloadOffset = offset + 12;
            const payloadLength = commandLength - 12;

            if (payloadLength > 0) {
                this.handleCommand(commandType, buffer.subarray(payloadOffset, payloadOffset + payloadLength));
            }

            offset += commandLength;
        }
    }

    handleCommand(type, payload) {
        /* 
           Photon Command Types:
           4: Disconnect
           6: Reliable
           7: Unreliable
           8: Fragment
        */
        switch (type) {
            case 6:
            case 7:
                this.decodeEvent(payload);
                break;
            case 8:
                this.handleFragment(payload);
                break;
        }
    }

    handleFragment(payload) {
        /*
           Fragment payload structure:
           0-3: Sequence Number
           4-7: Fragment Count
           8-11: Fragment Number
           12-15: Total Length
           16-19: Fragment Offset
           20+: Data
        */
        if (payload.length < 20) return;
        
        const sequenceNumber = payload.readUInt32BE(0);
        const fragmentCount = payload.readUInt32BE(4);
        const fragmentNumber = payload.readUInt32BE(8);
        
        if (!this.fragments.has(sequenceNumber)) {
            this.fragments.set(sequenceNumber, {
                count: fragmentCount,
                received: 0,
                buffers: new Array(fragmentCount)
            });
        }

        const fragmentGroup = this.fragments.get(sequenceNumber);
        if (!fragmentGroup.buffers[fragmentNumber]) {
            fragmentGroup.buffers[fragmentNumber] = payload.subarray(20);
            fragmentGroup.received++;

            if (fragmentGroup.received === fragmentGroup.count) {
                const completePayload = Buffer.concat(fragmentGroup.buffers);
                this.fragments.delete(sequenceNumber);
                this.decodeEvent(completePayload);
            }
        }
    }

    decodeEvent(payload) {
        if (payload.length < 2) return;
        
        const eventCode = payload.readUInt8(0);
        const eventData = payload.subarray(1);

        switch (eventCode) {
            case 2:
                this.emit('join', eventData);
                break;
            case 3:
                this.emit('move', eventData);
                break;
            case 5:
                this.emit('damage', this.parseDamage(eventData));
                break;
            case 200:
                this.emit('loot', this.parseLoot(eventData));
                break;
        }
    }

    parseDamage(data) {
        return {
            source: "Player", 
            target: "Mob",
            damage: data.length >= 4 ? data.readUInt16BE(0) : 0, 
            timestamp: Date.now()
        };
    }

    parseLoot(data) {
        return {
            itemId: data.length >= 4 ? data.readUInt32BE(0) : 0,
            amount: data.length >= 8 ? data.readUInt32BE(4) : 1
        };
    }
}

module.exports = Parser;
