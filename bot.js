const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

    console.log('Surveillant Turned On');

});

client.on('message', message => {
    if (message.content === 'eleve') {
       if(message.member.roles.has(689180199224475720)) {
         message.reply('tu es déja éléve.');
         } else {
         message.member.addRole(689180199224475720).catch(console.error);
         message.reply('registered');
       }
       }

});

client.login(process.env.BOT_TOKEN);
