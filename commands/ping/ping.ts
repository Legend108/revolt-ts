import { Client, Message } from "revolt.js";

export default {
  name: "ping",
  description: "Ping command",
  run: async (client: Client, message: Message) => {
    await message.reply("Hello World!");
  },
};
