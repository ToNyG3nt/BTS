const fs = require('fs');
const path = require('path');

class Logger {
    constructor(parser) {
        this.parser = parser;
        this.players = new Map();
        this.combatTimeout = 10000; 
        
        try {
            this.items = require('./items.json');
        } catch (e) {
            this.items = {};
        }

        this.parser.on('damage', this.handleDamage.bind(this));
        this.parser.on('loot', this.handleLoot.bind(this));
        
        setInterval(this.checkCombatStates.bind(this), 1000);
    }

    handleDamage(event) {
        const { source, damage, timestamp } = event;
        if (!source || damage <= 0) return;

        if (!this.players.has(source)) {
            this.players.set(source, {
                totalDamage: 0,
                combatStart: timestamp,
                lastAction: timestamp,
                inCombat: true
            });
        }

        const player = this.players.get(source);
        
        if (!player.inCombat) {
            player.combatStart = timestamp;
            player.totalDamage = 0;
            player.inCombat = true;
        }

        player.totalDamage += damage;
        player.lastAction = timestamp;

        this.displayDPS();
    }

    handleLoot(event) {
        const itemName = this.items[event.itemId] || `Unknown Item (${event.itemId})`;
        console.log(`[LOOT] Picked up ${event.amount}x ${itemName}`);
    }

    checkCombatStates() {
        const now = Date.now();
        let stateChanged = false;

        for (const [name, data] of this.players.entries()) {
            if (data.inCombat && (now - data.lastAction > this.combatTimeout)) {
                data.inCombat = false;
                stateChanged = true;
            }
        }

        if (stateChanged) {
            this.displayDPS();
        }
    }

    displayDPS() {
        console.clear();
        console.log("--- Real-time DPS ---");
        
        for (const [name, data] of this.players.entries()) {
            if (!data.inCombat) continue;
            
            const combatDurationSeconds = Math.max((data.lastAction - data.combatStart) / 1000, 1);
            const dps = (data.totalDamage / combatDurationSeconds).toFixed(2);
            
            console.log(`${name}: ${dps} DPS (${data.totalDamage} Total)`);
        }
        console.log("---------------------");
    }
}

module.exports = Logger;
