import { Client } from "revolt.js";
import fs from "node:fs";
import path from "node:path";

export default function (client: Client) {
  if (!client) return console.error("Invalid Client!");

  if (client) {
    const mainFolderPath = path.join(process.cwd(), "commands");
    const folder = fs.readdirSync(mainFolderPath);

    for (let subFolder of folder) {
      const mainSubFolderPath = path.join(process.cwd(), "commands", subFolder);
      const file = fs.readdirSync(mainSubFolderPath);

      file.forEach((element: any) => {
        const mainDir = path.join(mainSubFolderPath, element);
        const mainFile = require(mainDir).default;

        // @ts-ignore
        client.commands.set(mainFile.name, mainFile);
      });
    }
  }
}
