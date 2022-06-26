import { Nullable } from "revolt.js";

export default abstract class Types {
  // May be null, a string or nothing, also not available anywhere else outside class or class extending this

  protected title!: Nullable<String>;
  protected description!: Nullable<String>;
  protected colour!: Nullable<String>;
  protected url!: Nullable<String>;
  protected icon_url!: Nullable<String>;
}
