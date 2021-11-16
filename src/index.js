import { Client, Intents, MessageEmbed } from 'discord.js';
import FSTransport from './transports/FSTransport.js';
import filter from '../filter.json';
import config from './config.js';

const blockLogTrasports = [new FSTransport(config.blocksPath)];

let intents = [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES];

if (config.action === 'BAN') {
  intents.push(Intents.FLAGS.GUILD_BANS);
}

const client = new Client({
  intents,
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);

  if (config.logChannel) {
    config.logChannel = client.channels.resolve(config.logChannel);
  }
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  const isScam = filter.some((filterWord) => message.content.toLowerCase().includes(filterWord.toLowerCase()));
  if (!isScam) return;

  const log = `Author ID: ${message.author.id}, Username & Tag: ${message.author.tag}, Message content: "${message.content}"\n`;
  const logChannel = config.logChannel || message.channel;
  const logEmbedDesc = config.embedOptions.description
    .replace(/{MENTION}/g, message.author.tag)
    .replace(/{ID}/g, message.author.id);
  const logEmbed = new MessageEmbed()
    .setColor(config.embedOptions.color)
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setDescription(logEmbedDesc)
    .setTimestamp()
    .addFields([{ name: 'Action', value: config.action }]);

  await Promise.all(blockLogTrasports.map(async (transport) => await transport.log(log)));
  console.log(`Blocked scam link. ${log}`);

  switch (config.action) {
    case 'DELETE':
      await message.delete({ reason: config.actionReason });
      break;

    case 'BAN':
      await message.delete({ reason: config.actionReason });
      await message.guild.bans.create(message.author, { reason: config.actionReason });
      break;

    case 'IGNORE':
    default:
      break;
  }

  await logChannel.send({ embeds: [logEmbed] });
});

client.login(config.token);
