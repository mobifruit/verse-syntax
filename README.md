# Verse Syntax Bot

Verse Syntax Bot is an open-source developer tool that brings syntax highlighting for Epic’s Verse scripting language to Discord and beyond.

It provides:

- 🎨 A **Prism.js grammar for Verse**
- 🌈 An **ANSI-based syntax highlighter** for Discord messages (text, not images)
- 🤖 A **Discord bot** that renders readable, color-coded Verse code blocks
- 🧩 A foundation for adding Verse support to websites, editors, and other tooling

The goal of this project is to make Verse code easier to read, share, and collaborate on in community and development spaces.

# ✨ Why This Exists

Verse is rapidly becoming important in the **UEFN / Fortnite creator ecosystem**, but tooling around syntax highlighting and code readability is still limited outside official environments.

Verse Syntax Bot helps fill that gap by providing:

- Readable code snippets in Discord
- A reusable grammar definition
- A base for future Verse tooling integrations

This project is designed to be **community-friendly, extensible, and platform-agnostic**.

# 🚀 Features

- **Real text highlighting** — no code-to-image rendering
- Works directly inside Discord using ANSI color codes
- Customizable color themes
- Extendable Prism grammar
- Designed for future integrations (WordPress, web, editors, etc.)

# 📦 Project Structure
/prism-verse        → Verse language grammar
/discord-bot        → ANSI highlighter bot
/docs               → Usage and integration guides

# 🛠 Usage (Discord)

Users can post Verse code like:

```verse
module MyIsland

player_spawner := class():
    OnBegin():
        Print("Hello, world!")
```


The bot responds with a **color-coded version** using ANSI formatting.

## 🤝 Contributing

Contributions are welcome! You can help by:

- Improving the Verse grammar
- Adding new tokens or syntax support
- Expanding platform integrations
- Improving documentation

Please see CONTRIBUTING.md for guidelines.

## 📜 License

This project is licensed under the **Apache License 2.0**.

You are free to use, modify, and distribute this software under the terms of the license. Attribution must be preserved.

## 🏢 Maintainer

**Maintained by** 3dlux

Development led by the 3dlux.art tools team.

### About 3dlux

3dlux builds tools and experiences for game development and real-time worlds.

## ⚠️ Disclaimer

This project is an independent open-source tool.

**Verse Syntax Bot is not affiliated with, endorsed by, or sponsored by Epic Games, Inc.**
Verse, Unreal Editor for Fortnite (UEFN), and Fortnite are trademarks or registered trademarks of Epic Games.

