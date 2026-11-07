# Discord Bot

A simple Discord bot built with **Node.js** and **discord.js v14**.

## Requirements

- [Node.js](https://nodejs.org/)
- A Discord account
- A Discord Bot Token

## Installation

1. Download or clone this repository.
2. Open the project folder in VS Code or CMD.
3. Open a terminal.
4. Install dependencies:

```bash
npm install
```

## Configuration

1. Open `index.js`.
2. Find:

```js
const TOKEN = 'YOUR_BOT_TOKEN';
```

3. Replace `YOUR_BOT_TOKEN` with your bot token.

**Never share your bot token with anyone!**

## Starting the Bot

Run:

```bash
node index.js
```

If everything works, you should see:

```text
YourBot#0000 is online!
```

## Commands

| Command  | Description        |
| -------- | ------------------ |
| `!ping`  | Replies with Pong! |
| `!hello` | Sends a greeting   |

## Technologies

- Node.js
- discord.js v14

## License

This project is free to use and modify.
