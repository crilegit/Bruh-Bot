'use strict';

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'ping').then {
        msg.reply('Pong! It took {ping}');
    }
});

client.login('NzYzNDIyMjE4MzQ4MDAzMzQw.X33eWA.aZB3RpT0L12Pc91FUYj4kWQ2mHc');
