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
            .setColor('#8678b5')
            .addField("WhatEver Commands list :", " \n  *Dqms - **Get the Dqms's stats (#spambotfortnite)** \n *Youtube - **Get the Dqms's Youtube channel** \n *Twitch - **Get the Dqms's Twitch channel** \n *Info - **Get the bot infos** \n *Invite - **Get the link to invite someone**")
        message.channel.sendEmbed(help_embed);
    }

    if (message.content === prefix + "dqms"){
        message.channel.sendMessage("!ftn xd Dqms");
    }
    
    if (message.content === prefix + "youtube"){
        message.channel.sendMessage("Dqms's Youtube channel : https://bit.ly/2ttEetU");
    }
    
    if (message.content === prefix + "info"){
        var info_embed = new Discord.RichEmbed()
            .setColor('#8678b5')
            .addField("WhatEver Bot Info :", " \n  Code : **Node** \n Developed by : **Dqms#5186**  \n Version : **Beta**")
        message.channel.sendEmbed(info_embed);
    }

    if (message.content === prefix + "invite"){
        var info_embed = new Discord.RichEmbed()
            .setColor('#8678b5')
            .addField("WhatEver Invite :", "\n If you want to invite someone : https://discord.gg/kQ6aV3A")
        message.channel.sendEmbed(info_embed);
    }

    if (message.content === prefix + "Twitch"){
        var info_embed = new Discord.RichEmbed()
            .setColor('#8678b5')
            .addField("WhatEver Twitch :", "\n Dqms's Twitch channel : https://www.twitch.tv/therealdqms ")
        message.channel.sendEmbed(info_embed);
    }

    if (message.content === "Salut"){
        message.reply("Salut à toi :)");
        console.log("Commande Salut effectuée");
    }
});
