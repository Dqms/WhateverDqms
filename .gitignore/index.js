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
        var help_embed = new Discord.RichEmbed()
            .setColor('#005DFD')
            .addField("WhatEver Commands list :", "(use the prefix : *) \n \n _*Dqms - **Get the Dqms's stats (#spambotfortnite)** \n _*Youtube_ - **Get the Dqms's Youtube channel** \n _*Info_ - **Get the bot infos** \n _*Invite_ - **Get the link to invite someone**")
        message.channel.sendEmbed(help_embed);
    }

    if (message.content === prefix + "dqms"){
        message.channel.sendMessage("!ftn xd Dqms");
    }
    
    if (message.content === prefix + "youtube"){
        message.channel.sendMessage("Dqms's Youtube channel : https://bit.ly/2ttEetU");
    }
    
    if (message.content === prefix + "info"){
        message.channel.sendMessage("WhatEver Bot Infos : \n \n **Code** : Node \n **Developed by** : Dqms#5186  \n **Version** : Beta");
    }

    if (message.content === prefix + "invite"){
        message.channel.sendMessage("If you want to invite someone : https://discord.gg/kQ6aV3A");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour.");
        console.log("Commande Salut effectuée");
    }
});
