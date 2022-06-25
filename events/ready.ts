import { Client } from "revolt.js";

export default {
  name: "ready",
  run: (client: Client) => {
    console.log("Logged in as " + client.user?.username);
  },
};
