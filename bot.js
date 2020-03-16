const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

    console.log('Surveillant Turned On');

});

client.on('message', message => {
    let pupil = message.guild.roles.find(role => role.name === "Eleve");
    if (message.content === 'eleve') {
       if(message.member.roles.has(pupil)) {
         message.reply('tu es déja éléve.');
         } else {
         message.member.addRole(pupil).catch(console.error);
         message.reply('registered');
       }
       }

});

client.login(process.env.BOT_TOKEN);
