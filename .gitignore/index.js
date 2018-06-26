const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.login(process.env.TOKEN);

bot.on('ready', function() {
    bot.user.setGame("Developed by Dqms#5186")
    console.log("Connected");
});

bot.on('guildMemberAdd', member => {
    member.guild.channels.find("name", "bienvenue").send(` Bienvenue à ${member.user.username} qui vient de rejoindre le discord.`)
})

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes : \n *help \n *dqms \n *youtube");
    }

    if (message.content === prefix + "dqms"){
        message.channel.sendMessage("!ftn Dqms");
    }
    
    if (message.content === prefix + "youtube"){
        message.channel.sendMessage("https://bit.ly/2ttEetU");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour.");
        console.log("Commande Salut effectuée");
    }
});
