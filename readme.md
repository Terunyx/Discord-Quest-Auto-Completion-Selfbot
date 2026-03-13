# Discord Quest Auto-Completion Selfbot

A selfbot that automatically completes **Discord Quests**.

Based on the original work by [amia](https://gist.github.com/aamiaa/204cd9d42013ded9faf646fae7f89fbb/4912415839790240d49c1d2553e940f0c65f95d5).

This project provides a minimal selfbot framework built on top of discord.js core libraries, demonstrating how selfbot patches can be implemented without modifying the library’s source code directly.

> [!WARNING]
> **I take no responsibility for accounts that get blocked for using this repo.**

> [!CAUTION]
> **Using this on a user account is prohibited by the [Discord TOS](https://discord.com/terms) and can lead to account suspension.**

## ✨ Features

* Automatically **enrolls** and **completes** currently active quests. Supported task types:

  * `WATCH_VIDEO`
  * `PLAY_ON_DESKTOP`
  * `PLAY_ON_XBOX` (untested)
  * `PLAY_ON_PLAYSTATION` (untested)
  * `PLAY_ACTIVITY` (untested)
  * `WATCH_VIDEO_ON_MOBILE`
  * `ACHIEVEMENT_IN_ACTIVITY`

* Automatically **redeems rewards** for completed quests.
* Unsupported for now (due to no valid samples at time of development):

  * `STREAM_ON_DESKTOP`

## 📦 Installation & Setup

> [!NOTE]
> **Node.js 24.0.0 or newer is required**

### 1. Install dependencies

```sh
npm install
```

### 2. Insert your token

Replace the token inside `.env`.

### 3. Start the bot

```sh
npm run start
```

> [!TIP]
> The current [bot.ts](bot.ts) is configured to redeem rewards by default. To run auto-completion instead, switch to the quest execution block in that file.

## 📤 Example Output

After completion, your output may look like this:

```sh
Logged in as @<username>
Found 9 valid quests to do.
Spoofing video for Opera GX.
Spoofed your game to the Comet AI browser. Wait for 15 more minutes.
Spoofed your game to Delta Force. Wait for 15 more minutes.
Spoofed your game to Where Winds Meet. Wait for 15 more minutes.
Spoofing video for Mobile Orbs Intro.
Spoofing video for Amazon.
Spoofing video for Microsoft Edge - Your AI Browser.
Spoofed your game to Risk of Rain 2. Wait for 15 more minutes.
Spoofing video for EVE Online Video.
Quest "Opera GX" completed!
Quest "Mobile Orbs Intro" completed!
Quest "Amazon" completed!
Quest "Microsoft Edge - Your AI Browser" completed!
Spoofed your game to the Comet AI browser. Wait for 15 more minutes.
Spoofed your game to Delta Force. Wait for 15 more minutes.
Spoofed your game to Where Winds Meet. Wait for 15 more minutes.
Spoofed your game to Risk of Rain 2. Wait for 15 more minutes.
Quest "EVE Online Video" completed!
...
Spoofed your game to the Comet AI browser. Wait for 1 more minute.
Spoofed your game to Delta Force. Wait for 1 more minute.
Spoofed your game to Where Winds Meet. Wait for 1 more minute.
Spoofed your game to Risk of Rain 2. Wait for 1 more minute.
Quest "Download Comet Browser" completed!
Quest "New Season Ahsarah" completed!
Quest "Where Winds Meet Launch" completed!
Quest "Alloyed Collective Gupdoption" completed!
```

## 🙏 Credits

* [Complete Recent Discord Quest](https://gist.github.com/aamiaa/204cd9d42013ded9faf646fae7f89fbb/4912415839790240d49c1d2553e940f0c65f95d5)
* [Equicord's Questify plugin](https://equicord.org/plugins/Questify)
* [discord.js](https://github.com/discordjs/discord.js)

*README compiled with assistance from AI.*
