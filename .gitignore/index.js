const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.login(process.env.TOKEN);

bot.on('ready', function() {
    bot.user.setGame("*help")
    console.log("Connected");
});

bot.on('guildMemberAdd', member => {
    member.guild.channels.find("name", "bienvenue").send(` Bienvenue à ${member.user.username} qui vient de rejoindre le discord.`)
})

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("WhatEver Commands list : \n \n **Dqms** - *Get the Dqms's stats (#spambotfortnite)* \n **Youtube** - *Get the Dqms's Youtube channel*");
    }

    if (message.content === prefix + "dqms"){
        message.channel.sendMessage("!ftn xd Dqms");
    }
    
    if (message.content === prefix + "youtube"){
        message.channel.sendMessage("https://bit.ly/2ttEetU");
    }
    
    if (message.content === prefix + "info"){
        message.channel.sendMessage("WhatEver Bot Infos : \n \n **Code** : *Node.js* \n **Developed by** : *Dqms#5186*  \n **Version** : *Beta*");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour.");
        console.log("Commande Salut effectuée");
    }
});
