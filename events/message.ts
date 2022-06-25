import { Client, Message } from "revolt.js";
// import client from "../index";

export default {
  name: "message",
  run: async (client: Client, message: Message) => {
    const prefix = process.env.PREFIX! || "!";

    if (message.content?.startsWith(prefix)) {
      const commandName = message.content?.split(prefix)[1];

      // @ts-ignore
      const cmd = client.commands.get(commandName);

      if (cmd) {
        try {
          cmd.run(client, message);
        } catch (err) {
          console.error(err);
          await message.reply("Oops, an error occured");
        }
      } else {
        return;
      }
    }
  },
};
