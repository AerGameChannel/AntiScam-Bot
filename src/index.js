const filter = require('../filter.json');
const { Client, Intents } = require('discord.js');
const { TOKEN, BLOCKS_PATH } = require('./config');
const { FSTransport } = require('./transports/FSTransport');

const blockLogTrasports = [new FSTransport(BLOCKS_PATH)];

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  const isScam = filter.some((filterWord) => message.content.includes(filterWord));
  if (!isScam) return;

  const log = `Author ID: ${message.author.id}, Username & Tag: ${message.author.tag}, Message content: ${message.content}\n`;
  await Promise.all(blockLogTrasports.map(async (transport) => await transport.log(log)));

  console.log(
    `Blocked scam link. Author ID: ${message.author.id}, Username & Tag: ${message.author.tag}, Message content: ${message.content}.`,
  );

  await message.channel.send(
    `Scam link blocked! Author ID: ${message.author.id}, Username & Tag: ${message.author.tag}. The user has probably been hacked.`,
  );
  await message.delete({ reason: 'AntiScam' });
});

client.login(TOKEN);
