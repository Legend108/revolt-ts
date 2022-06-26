import { Client, Message } from "revolt.js";
import { QuickDB } from "quick.db";
import Embed from "../../utils/embedMaker";

export default {
  name: "getPrefix",
  description: "Get current bot prefix",
  run: async (
    client: Client,
    message: Message,
    args: Array<String>,
    db: QuickDB
  ) => {
    try {
      const prefix: Boolean = await db.has(
        "prefix_" + message.channel?.server_id
      );

      if (prefix) {
        const currentPrefix: String | null = await db.get(
          "prefix_" + message.channel?.server_id
        );

        const successEmbed = new Embed();
        successEmbed.setDescription("Current server prefix: " + currentPrefix);
        successEmbed.setColor("AQUA");
        await message.reply({
          // @ts-ignore
          embeds: [successEmbed],
        });
      } else {
        const successEmbed = new Embed();
        successEmbed.setDescription(
          "Current server prefix: " + process.env.PREFIX!
        );
        successEmbed.setColor("AQUA");
        await message.reply({
          // @ts-ignore
          embeds: [successEmbed],
        });
      }
    } catch (error) {
      console.error(error);

      const errorEmbed = new Embed();
      errorEmbed.setDescription("Oops, a fatal error occured");
      errorEmbed.setColor("RED");

      await message.reply({
        // @ts-ignore
        embeds: [successEmbed],
      });
    }
  },
};
