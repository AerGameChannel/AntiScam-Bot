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

# Configuring bot

Before running your bot, you need to configure it

After downloading bot, open `config.json` file and fill it. It should look like this:

```json
{
  "token": "put your bot's token here",
  "logChannel": "put log channel id here",
  "action": "BAN",
  "actionReason": "AntiScam",
  "embedOptions": {
    "description": "Scam link blocked! User: {MENTION} ({ID})",
    "color": "#ff0000"
  }
}
```

## "token"

Replace the `put your token here` with your bot's token.

## "logChannel"

Replace the `put log channel id here` with the channel id you want to send blocking log to.
Bot will send the log message to the same chat as message with scam link if id is invalid.

## "action"

Choose the action you want the bot to do when it detects a message with scam link
Available values: "DELETE", "BAN", "IGNORE"

## "actionReason"

The reason used when user gets banned (If you chose `"BAN"` in `"action"`).
Set it to whatever you want. Default: "AntiScam".

## Filter

Your filter is located in `filter.json` file. You can easily edit it. Just extend the filter array :)
