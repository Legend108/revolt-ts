import { Client } from "revolt.js";
import fs from "node:fs";
import path from "node:path";

export default async (client: Client) => {
  return new Promise((resolve, reject) => {
    if (!client) reject("Invalid client");

    const eventsPath = path.join(process.cwd(), "events");
    const eventFiles = fs
      .readdirSync(eventsPath)
      .filter((file) => file.endsWith(".ts"));

    for (const file of eventFiles) {
      const filePath = path.join(eventsPath, file);
      const event = require(filePath).default;
      if (!event.name) reject("Invalid event name.");

      console.log(event);

      client.on(event.name, (...args) => event.run(client, ...args));
      resolve("Loaded events");
    }
  });
};
