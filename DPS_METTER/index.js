const os = require('os');
const pcap = require('pcap');
const Parser = require('./parser');
const Logger = require('./logger');

function getDefaultInterface() {
    const platform = os.platform();
    if (platform === 'darwin') return 'en0';
    
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (!iface.internal && iface.family === 'IPv4') {
                return platform === 'win32' ? iface.address : name;
            }
        }
    }
    return '';
}

const device = getDefaultInterface();
console.log(`[SYSTEM] Starting Albion Online Sniffer...`);
console.log(`[SYSTEM] Selected network interface: ${device || 'Default'}`);

try {
    const pcapSession = pcap.createSession(device, { filter: 'udp port 5056' });
    console.log(`[SYSTEM] Successfully bound to ${device || 'Default'} on UDP port 5056.`);
    const parser = new Parser();
    const logger = new Logger(parser);

    pcapSession.on('packet', (rawPacket) => {
        const packet = pcap.decode.packet(rawPacket);
        if (packet.payload && packet.payload.payload && packet.payload.payload.payload) {
            const udpPayload = packet.payload.payload.payload.data;
            parser.parse(udpPayload);
        }
    });

    process.on('SIGINT', () => {
        console.log(`[SYSTEM] Stopping sniffer...`);
        pcapSession.close();
        process.exit();
    });
} catch (error) {
    console.error(`[ERROR] Failed to start packet capture. Are you running as Administrator/root (sudo)?`);
    console.error(error.message);
    process.exit(1);
}
