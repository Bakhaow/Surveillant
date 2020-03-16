const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('Surveillant Turned On');

});

client.on('message', message => {

    if (message.content === 'register') {

       message.reply('registered');

       }

});

client.login(process.env.BOT_TOKEN);
