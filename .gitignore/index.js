const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.login(process.env.TOKEN);

bot.on('ready', function() {
    bot.user.setGame("Command: *help")
    console.log("Connected");
});

bot.login("NDYwNDU2Mzc3NDA0NDg5NzM4.DhFRMw.01K1YaKD6Y2o7Yr2e3n2vMu_arU");

  if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes \n *help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour.");
        console.log("Commande Salut effectuée");
    }
});
