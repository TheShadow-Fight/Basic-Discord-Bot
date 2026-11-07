const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
      ]
});

const TOKEN = 'YOUR_BOT_TOKEN'; // Replace with your bot's token

client.once('ready', () => {
    console.log(`${client.user.tag} is online!`);
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    if (message.content === '!ping') {
        message.reply('Pong! 🏓');
    }

    if (message.content === '!hello') {
        message.reply('Hello! 👋');
    }
});

client.login(TOKEN);
