import { Client, GatewayIntentBits, Events } from 'discord.js';

// Initializing enviroment variables from the dotenv file.

import 'dotenv/config';

// Creating a new Discord client instance with specific intentions.

const Application = new Client({
  intents: Object.values(GatewayIntentBits) // Gives access to FULL intentions.
});

// Runs when the App is logged on and ready.

Application.once(Events.ClientReady, async function(App) {
  console.log(`Logged in as ${App.user.displayName} for Bubble Gum Palace`);
});

// This will be temporarily placed until I add the commands feature.

Application.on(Events.MessageCreate, async function(Post) {
  if (Post.content != "!ping") { return 'Invalid post content' }

  const API = Math.round(Application.ws.ping), Timestamp = Date.now();
  const Websocket = Timestamp - Post.createdTimestamp;

  // Reply to the original post with the given API and Websocket values.

  await Post.reply({
    content: `Pong! Post latency: **${API}ms**. API latency: **${Websocket}ms**.`
  });
})

Application.login(process.env.Secret);