[![forthebadge](https://forthebadge.com/images/badges/powered-by-coffee.svg)](https://forthebadge.com)

# Description

This bot deletes messages with scam links using configurable filter and logs everything in `blocks.txt`. You can change filter whenever you want, you don't even have to restart the bot to apply changes.

# Installation

This bot runs on [node.js](https://nodejs.org). Recommended version is 16.5.0

1. Install [node 16.5.0 or newer](https://nodejs.org/en/download/)
2. Run `npm install` in the bot directory.
3. Configure your bot
4. Run `npm start` to run your bot.

# Development

```bash
# development(watch) mode
npm run dev

# format project code
npm run format
```

# WARNING! Outdated info!
I'll update the readme file later. All bot configuration is in config.json.

# Configuring bot

Before running your bot, you need to configure it

## Token

After downloading bot, create .env file and fill it. It should look like this:
TOKEN=`__TOKEN__`

Replace `__TOKEN__` with your bot token.

## Filter

Your filter is located in `filter.json` file. You can easily edit it. Just extends the filter array :)
