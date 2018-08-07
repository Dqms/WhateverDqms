const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.login(process.env.TOKEN);

bot.on('ready', function() {
    bot.user.setGame("*help")
    console.log("Connected");
});

bot.on('guildMemberAdd', member => {
    let role = member.guild.roles.find("name", "Membres")
    member.guild.channels.find("name", "bienvenue").send(`:boom: Bienvenue à ${member} qui vient de rejoindre le discord ! :tada: N'oublie pas de lire les #regles et #roles  :innocent: .`)
    member.addRole(role)
})

bot.on('message', message => {
    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#8678b5')
            .addField("WhatEver Commands list :", " \n  *Dqms - **Voir les stats de Dqms (Uniquement dans le channel #commands-fortnite)** \n*Youtube - **Voir la chaîne Youtube de Dqms** \n*Twitch - **Voir la chaîne Twitch de Dqms** \n*Invite - **Avoir le lien d'invitation officiel** \n*Info - **Informations du bot**")
        message.channel.sendEmbed(help_embed);
    }

    if (message.content === prefix + "dqms"){
        message.channel.sendMessage("!fm FromHumanToDqms");
    }
    
    if (message.content === prefix + "youtube"){
        var info_embed = new Discord.RichEmbed()
            .setColor('#8678b5')
            .addField("WhatEver Youtube :", " \n  Chaîne Youtube de Dqms : <https://bit.ly/2ttEetU>")
        message.channel.sendEmbed(info_embed);
    }
    
    if (message.content === prefix + "info"){
        var info_embed = new Discord.RichEmbed()
            .setColor('#8678b5')
            .addField("WhatEver Bot Info :", " \n  Code : **Node** \nDéveloppé : **Dqms#5186**  \nVersion : **1.1**")
        message.channel.sendEmbed(info_embed);
    }

    if (message.content === prefix + "invite"){
        var info_embed = new Discord.RichEmbed()
            .setColor('#8678b5')
            .addField("WhatEver Invite :", "\n Lien d'invitation officiel : https://discord.gg/xaFKSUh")
        message.channel.sendEmbed(info_embed);
    }

    if (message.content === prefix + "twitch"){
        var info_embed = new Discord.RichEmbed()
            .setColor('#8678b5')
            .addField("WhatEver Twitch :", "\n Chaîne Twitch de Dqms : https://www.twitch.tv/dqmsofficial ")
        message.channel.sendEmbed(info_embed);
    }

    if (message.content === "Salut"){
        message.reply("Salut à toi :)");
        console.log("Commande Salut effectuée");
    }
});
