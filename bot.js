const { Client, GatewayIntentBits } = require('discord.js');
const Prism = require('prismjs');

// Load base languages Prism needs
require('prismjs/components/prism-clike');
require('prismjs/components/prism-javascript');

// Load your custom Verse grammar
require('./prism-verse');

require('dotenv').config();

// === ANSI color map ===
/*
 * Verse Prism Grammar & Discord Highlighter Bot
 * Copyright (c) 2026 3dlux
 * Maintained by mobifruit of 3dlux.art
 * Licensed under the Apache License, Version 2.0
 */

const ANSI = {
  reset: "\u001b[0m",
  gray: "\u001b[90m",
  red: "\u001b[31m",
  green: "\u001b[32m",
  yellow: "\u001b[33m",
  blue: "\u001b[34m",
  magenta: "\u001b[35m",
  cyan: "\u001b[36m",
  white: "\u001b[37m"
};

// Map Prism token types to colors
const colorMap = {
  'comment': ANSI.gray,
  'string': ANSI.green,
  'keyword': ANSI.cyan,
  'boolean': ANSI.magenta,
  'number': ANSI.magenta,
  'class-name': ANSI.yellow,
  'function': ANSI.blue,
  'operator': ANSI.red,
  'punctuation': ANSI.white
};

// Convert Prism tokens → ANSI text
function tokensToANSI(tokens) {
  let result = "";

  tokens.forEach(token => {
    if (typeof token === "string") {
      result += token;
    } else {
      const color = colorMap[token.type] || ANSI.white;
      result += color + tokensToANSI(
        Array.isArray(token.content) ? token.content : [token.content]
      ) + ANSI.reset;
    }
  });

  return result;
}

// Create bot
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.on('messageCreate', async message => {
  if (message.author.bot) return;

  const match = message.content.match(/```verse\n([\s\S]*?)```/);
  if (!match) return;

  const code = match[1];

  const highlighted = Prism.tokenize(code, Prism.languages.verse);
  const ansiCode = tokensToANSI(highlighted);

  await message.reply({
    content: "```ansi\n" + ansiCode + "\n```"
  });
});

// client.login("YOUR_BOT_TOKEN_HERE");

client.login(process.env.DISCORD_TOKEN); // <- token loaded from .env
