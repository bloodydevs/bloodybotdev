require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');

// Initialize a new Client instance with all intents, including privileged ones
const client = new Client({
    intents: Object.values(GatewayIntentBits)
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        status: 'dnd',
        activity: {
            name: 'for commands',
            type: 'WATCHING',
        },
    });
});

client.login(process.env.BOT_TOKEN);