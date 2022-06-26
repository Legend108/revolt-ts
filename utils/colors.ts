export default class Color {
  public color: String;
  constructor(private colorName: String) {
    switch (colorName) {
      case "AQUA":
        this.color = "#00FFFF";
        break;
      case "AQUAMARINE":
        this.color = "#7FFFD4";
        break;
      case "AVOCADO":
        this.color = "#568203";
        break;
      case "ANDROID":
        this.color = "#3DDC84";
        break;
      case "ALMOND":
        this.color = "#EFDECD";
        break;
      case "BLACK":
        this.color = "#000000";
        break;
      case "BLUE":
        this.color = "#0000FF";
        break;
      case "BRANDY":
        this.color = "#87413F";
        break;
      case "BRIGHT_GREEN":
        this.color = "#66FF00";
        break;
      case "BRONZE":
        this.color = "#CD7F32";
        break;
      case "BROWN":
        this.color = "#88540B";
        break;
      case "BURGUNDY":
        this.color = "#800020";
        break;
      case "CANDY_PINK":
        this.color = "#E4717A";
        break;
      case "CARMINE":
        this.color = "#960018";
        break;
      case "CHAMPAGNE":
        this.color = "#F7E7CE";
        break;
      case "CHARCOAL":
        this.color = "#36454F";
        break;
      case "CHINA_ROSE":
        this.color = "#A8516E";
        break;
      case "CHOCOLATE":
        this.color = "#7B3F00";
        break;
      case "COCOA_BROWN":
        this.color = "#D2691E";
        break;
      case "COFFEE":
        this.color = "#6F4E37";
        break;
      case "COPPER":
        this.color = "#B87333";
        break;
      case "CYAN":
        this.color = "#00FFFF";
        break;
      case "DARK_RED":
        this.color = "#8B0000";
        break;
      case "DESERT":
        this.color = "#C19A6B";
        break;
      case "DENIM":
        this.color = "#1560BD";
        break;
      case "EMERALD":
        this.color = "#7DF9FF";
        break;
      case "EGGSHELL":
        this.color = "#F0EAD6";
        break;
      case "ERIN":
        this.color = "#00FF40";
        break;
      case "FLAME":
        this.color = "#E25822";
        break;
      case "FLIRT":
        this.color = "#A2006D";
        break;
      case "FROSTBITE":
        this.color = "#E936A7";
        break;

      // A - F completed, really stressfull lmao

      case "GHOST_WHITE":
        this.color = "#F8F8FF";
        break;
      case "GOLDEN":
        this.color = "#A57C00";
        break;
      case "GRAY":
        this.color = "#808080";
        break;
      case "LIGHT_GRAY":
        this.color = "#BEBEBE";
        break;
      case "GREEN":
        this.color = "#00FF00";
        break;
      case "GREEN_CHLOROPHYLL":
        this.color = "#00A550";
        break;
      case "HONEYDEW":
        this.color = "#F0FFF0";
        break;
      case "HOT_PINK":
        this.color = "#FF69B4";
        break;
      case "HOT_MAGENTA":
        this.color = "#FF1DCE";
        break;
      case "HEAT_WAVE": // Siuuuu
        this.color = "#FF7A00";
        break;
      case "IMPERIAL_RED":
        this.color = "#ED2939";
        break;
      case "INDIGO":
        this.color = "#4B0082";
        break;
      case "IRIS":
        this.color = "#5A4FCF";
        break;
      case "ICEBERG":
        this.color = "#71A6D2";
        break;
      case "JADE":
        this.color = "#00A86B";
        break;
      case "JET":
        this.color = "#343434";
        break;
      case "JASMINE":
        this.color = "#F8DE7E";
        break;
      case "KHAKI":
        this.color = "#C3B091";
        break;
      case "LAPIS":
        this.color = "#26619C";
        break;
      case "LAVENDER":
        this.color = "#B57EDC";
        break;
      case "LEMON":
        this.color = "#FFF700";
        break;
      case "MAGENTA":
        this.color = "#FF00FF";
        break;
      case "MAHOGANY":
        this.color = "#C04000";
        break;
      case "MANGO":
        this.color = "#FDBE02";
        break;
      case "MAROON":
        this.color = "#800000";
        break;
      case "MELON":
        this.color = "#FEBAAD";
        break;
      case "NAVY_BLUE":
        this.color = "#000080";
        break;
      case "NEON_GREEN":
        this.color = "#39FF14";
        break;
      case "OCHRE":
        this.color = "#CC7722";
        break;
      case "OLIVE":
        this.color = "#808000";
        break;
      case "ORANGE":
        this.color = "#FF7F00";
        break;
      case "ORCHID":
        this.color = "#DA70D6";
        break;
      case "OXBLOOD":
        this.color = "#4A0000";
        break;
      case "PACIFIC":
        this.color = "#1CA9C9";
        break;
      case "PARADISE_PINK":
        this.color = "#E63E62";
        break;
      case "PEACH":
        this.color = "#FFE5B4";
        break;
      case "PLATINUM":
        this.color = "#E5E4E2";
        break;
      case "PURPLE":
        this.color = "#6A0DAD";
        break;
      case "RASPBERRY":
        this.color = "#E30B5D";
        break;
      case "RED":
        this.color = "#FF0000";
        break;
      case "REDWOOD":
        this.color = "#A45A52";
        break;
      case "ROSE":
        this.color = "#FF007F";
        break;
      case "RUBY":
        this.color = "#E0115F";
        break;
      case "SAGE":
        this.color = "#BCB88A";
        break;
      case "SAFFRON":
        this.color = "#F4C430";
        break;
      case "SALMON":
        this.color = "#FA8072";
        break;
      case "SEA_GREEN":
        this.color = "#2E8B57";
        break;
      case "SILVER":
        this.color = "#C0C0C0";
        break;
      case "SKY_BLUE":
        this.color = "#87CEEB";
        break;
      case "SNOW":
        this.color = "#FFFAFA";
        break;
      case "TAN":
        this.color = "#D2B48C";
        break;
      case "TEAL":
        this.color = "#008080";
        break;
      case "TERRA_COTTA":
        this.color = "#E2725B";
        break;
      case "TOMATO":
        this.color = "#FF6347";
        break;
      case "TURQUOISE":
        this.color = "#40E0D0";
        break;
      case "VANILLA":
        this.color = "#F3E5AB";
        break;
      case "VIOLET":
        this.color = "#8F00FF";
        break;
      case "VERMILION":
        this.color = "#E34234";
        break;
      case "WHITE":
        this.color = "#FFFFFF";
        break;
      case "WHEAT":
        this.color = "#F5DEB3";
        break;
      case "WINE":
        this.color = "#722F37";
        break;
      case "XANTHIC":
        this.color = "#EEED09";
        break;
      case "YELLOW":
        this.color = "#FFFF00";
        break;
      case "YELLOW_ORANGE":
        this.color = "#FFAE42";
        break;
      case "YINMIN_BLUE":
        this.color = "#2E5090";
        break;
      case "ZAFFRE":
        this.color = "#0014A8";
        break;
      default:
        this.color = "#000000";
        break;
    }
  }
}
