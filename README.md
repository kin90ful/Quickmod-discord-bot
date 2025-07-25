# QuickMod Discord Bot

## Overview
QuickMod is a lightweight, modular Discord moderation bot designed for demonstration and educational purposes. It includes basic moderation commands and embeds, structured using Discord.js v14 with slash command support.

This bot is intended as a public showcase and does not include sensitive data, server-specific logic, or private infrastructure.

## Features
- `/kick` – Kick a member from the server with a provided reason
- `/ban` – Ban a member from the server with a provided reason
- `/say` – Send a message as the bot using embed formatting
- Admin-only command permissions
- Clean modular command folder structure
- Environment-based token setup

## File Structure
commands/
- ban.js
- kick.js
- say.js

utils/
- permissions.js

env.example
- index.js
- package.json

## Setup Instructions

### Requirements
- Node.js v16.9 or higher
- Discord bot token with `application.commands` and `bot` permissions

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/quickmod-discord-bot.git
cd quickmod-discord-bot
