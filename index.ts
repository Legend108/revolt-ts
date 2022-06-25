require("dotenv").config();

import { Client } from "revolt.js/dist/Client";

import loadCommands from "./lib/loadCommands";
import loadEvents from "./lib/loadEvents";

const client: Client = new Client();

// @ts-ignore
client.commands = new Map();

loadCommands(client);

(async () => {
  loadEvents(client)
    .then((res) => console.log(res))
    .catch(console.error);
})();

export default client;

client.loginBot(process.env.TOKEN!);
