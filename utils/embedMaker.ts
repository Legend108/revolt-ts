import Types from "./embedTypes";
import Color from "./colors";

class Embed extends Types {
  constructor() {
    super();
  }

  public setColor(color: String): void {
    const colorHex = new Color(color);
    this.colour = colorHex.color;
  }

  public setTitle(title: String): void {
    this.title = title;
  }

  public setDescription(description: String): void {
    this.description = description;
  }

  public setURL(url: String): void {
    this.url = url;
  }

  public setIcon(iconURL: String): void {
    this.icon_url = iconURL;
  }
}

export default Embed;
