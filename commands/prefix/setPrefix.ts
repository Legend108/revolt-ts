import { Client, Message } from "revolt.js";
import { QuickDB } from "quick.db";
import Embed from "../../utils/embedMaker";

export default {
  name: "setPrefix",
  description: "Set bot prefix",
  run: async (
    client: Client,
    message: Message,
    args: Array<String>,
    db: QuickDB
  ) => {
    const errEmbed = new Embed();
    errEmbed.setTitle("Invalid prefix provided");
    errEmbed.setColor("RED");

    const successEmbed = new Embed();
    successEmbed.setTitle("Prefix has been updated succesfully");
    successEmbed.setColor("AQUA");

    try {
      if (!args[0])
        return message.reply({
          // @ts-ignore
          embeds: [errEmbed],
        });

      if (args[0]) {
        const prefix = args[0];
        const guildID = message.channel?.server_id;

        await db.set("prefix_" + guildID, prefix);

        return message.reply({
          // @ts-ignore
          embeds: [successEmbed],
        });
      }
    } catch (error) {
      console.error(error);

      const fatalError = new Embed();
      fatalError.setTitle("Oops, a fatal error occured");
      fatalError.setColor("RED");

      await message.reply({
        // @ts-ignore
        embeds: [fatalError],
      });
    }
  },
};
