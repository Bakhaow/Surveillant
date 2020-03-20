const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "&";

client.on('ready', () => {

    console.log('Surveillant Turned On');

});

client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === 'register') {
        let nom = args[0];
        let prenom = args[1];
        let nickname = nom.charAt(0).toUpperCase() + ". " + prenom.charAt(0).toUpperCase() + prenom.slice(1);
        message.member.setNickname(nickname)
        message.channel.send('Registering ' + nickname);
    }
});

client.login(process.env.BOT_TOKEN);
