const { Client, Intents, Permissions, Options } = require('discord.js');
const cintents = new Intents([Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]);
const fs = require("fs");
const client = new Client({ 
    intents: cintents
});
const config = require("./config.json")
const Break = {};
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) =>  {
    try {
        if(message.author.bot) return;
        fs.readFileSync(`filter.txt`, 'utf-8').toString().split(',').forEach(element => {
            if(message.content.includes(element))
            {
                var blocks = fs.readFileSync(`blocks.txt`, 'utf-8');
                var towrite = `${blocks}\nAuthor ID: ${message.author.id}, Username & Tag: ${message.author.tag}, Message content: ${message.content}`
                fs.writeFileSync(`blocks.txt`, towrite, 'utf-8');
                console.log(`Blocked scam link. Author ID: ${message.author.id}, Username & Tag: ${message.author.tag}, Message content: ${message.content}.`);
                message.channel.send(`Scam link blocked! Author ID: ${message.author.id}, Username & Tag: ${message.author.tag}. The user has probably been hacked.`);
                message.delete({reason: "AntiScam"});
                throw Break;
            }

        })
    }
    catch (e) {
        if (e !== Break) throw e;
    }

});

client.login(config["TOKEN"]);
