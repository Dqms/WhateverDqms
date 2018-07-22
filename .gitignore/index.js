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
    member.guild.channels.find("name", "bienvenue").send(` Bienvenue à ${member.user.username} qui vient de rejoindre le discord.`)
    member.addRole(role)
})

bot.on('message', message => {
    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#8678b5')
            .addField("WhatEver Commands list :", " \n  *Dqms - **Get the Dqms's stats (#spambotfortnite)** \n*Youtube - **Get the Dqms's Youtube channel** \n*Twitch - **Get the Dqms's Twitch channel** \n*Invite - **Get the link to invite someone** \n*Info - **Get the bot infos**")
        message.channel.sendEmbed(help_embed);
    }

    if (message.content === prefix + "dqms"){
        message.channel.sendMessage("!ftn FromHumanToDqms");
    }
    
    if (message.content === prefix + "youtube"){
        var info_embed = new Discord.RichEmbed()
            .setColor('#8678b5')
            .addField("WhatEver Youtube :", " \n  Dqms's Youtube channel : <https://bit.ly/2ttEetU>")
        message.channel.sendEmbed(info_embed);
    }
    
    if (message.content === prefix + "info"){
        var info_embed = new Discord.RichEmbed()
            .setColor('#8678b5')
            .addField("WhatEver Bot Info :", " \n  Code : **Node** \nDeveloped by : **Dqms#5186**  \nVersion : **Beta**")
        message.channel.sendEmbed(info_embed);
    }

    if (message.content === prefix + "invite"){
        var info_embed = new Discord.RichEmbed()
            .setColor('#8678b5')
            .addField("WhatEver Invite :", "\n If you want to invite someone : https://discord.gg/rnnhvXV")
        message.channel.sendEmbed(info_embed);
    }

    if (message.content === prefix + "twitch"){
        var info_embed = new Discord.RichEmbed()
            .setColor('#8678b5')
            .addField("WhatEver Twitch :", "\n Dqms's Twitch channel : https://www.twitch.tv/dqmsofficial ")
        message.channel.sendEmbed(info_embed);
    }

    if (message.content === "Salut"){
        message.reply("Salut à toi :)");
        console.log("Commande Salut effectuée");
    }
});
