import {} from "revolt.js";
const map = new Map();

declare module "revolt.js" {
  export interface Client {
    commands: map;
  }
}
