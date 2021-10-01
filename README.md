[![forthebadge](https://forthebadge.com/images/badges/powered-by-coffee.svg)](https://forthebadge.com)
# Description

This bot deletes messages with scam links using configurable filter and logs everything in `blocks.txt`. You can change filter whenever you want, you don't even have to restart the bot to apply changes.

# Installation

This bot runs on [node.js](https://nodejs.org). Recommended version is 16.5.0

1. Install [node 16.5.0 or newer](https://nodejs.org/en/download/)
2. Run `npm install` in the bot directory.
3. Configure your bot
4. Run `npm start` to run your bot.

# Configuring bot

Before running your bot, you need to configure it

## Token

After downloading bot, open the `config.json` file. It should look like this:
`
{
	"TOKEN": "<Put bot token here>"
}
`

Replace `<Put bot token here>` with your bot token.

## Filter

Your filter is located in `filter.txt` file. You can easily edit it. Just don't forget to separate every keyword with `,` :)
