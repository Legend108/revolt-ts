import { Client, Message } from "revolt.js";
import data from "../index";

export default {
  name: "message",
  run: async (client: Client, message: Message) => {
    let prefix: String;

    const guildID = message.channel?.server_id;

    const checkPrefix: Boolean = await data.db.has("prefix_" + guildID);

    // @ts-ignore
    prefix = checkPrefix
      ? await data.db.get("prefix_" + guildID)
      : process.env.PREFIX!;

    // @ts-ignore
    if (message.content?.startsWith(prefix)) {
      // @ts-ignore
      const commandName: String = message.content?.replace(prefix, "");

      const cmdName = commandName.split(" ")[0];

      // @ts-ignore
      const cmd = client.commands.get(cmdName);

      if (cmd) {
        const args: Array<String> = [];
        const argsF: Array<string> = commandName.split(" ");

        argsF.filter((val: String, index: Number) => {
          if (!(val == cmdName)) {
            args.push(val);
          }
        });

        try {
          cmd.run(client, message, args, data.db);
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
