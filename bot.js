const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "&";

client.on('ready', () => {

    console.log('Surveillant Turned On');

});

client.on('message', message => {
    if (message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === 'register' || command === 'reg' || command === 'r') {
        let nom = args[0];
        let prenom = args[1];
        let nickname = nom.charAt(0).toUpperCase() + ". " + prenom.charAt(0).toUpperCase() + prenom.slice(1);
        message.member.setNickname(nickname)
        message.member.addRole("689180199224475720").catch(console.error);
        message.channel.send('Registering ' + nickname);
    }else if(command === 'allemand' || command === 'germaniste' || command === 'ger' || command === 'g' || command === 'all' || command === 'a') {
        message.member.addRole("689127335697317901").catch(console.error);
    }else if(command === 'espagnol' || command === 'esp' || command === 'e' || command === 'hispaniste' || command === 'h') {
        message.member.addRole("689126422941663251").catch(console.error);
    }    
    
    
});

client.login(process.env.BOT_TOKEN);
