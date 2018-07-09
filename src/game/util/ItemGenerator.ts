import Item from "../model/implementation/Item";
import itemNames from "./ItemNames";

export default class ItemGenerator {
  names: string[];
  constructor() {}

  public generateItem(): Item {
    const name = this.generateName();
    const strength = this.generateStrength();
    return new Item(name, strength);
  }

  private generateStrength(): number {
    return Math.floor(Math.random() * 100 + 1);
  }

  private generateName(): string {
    return itemNames[Math.floor(Math.random() * itemNames.length)];
  }
}
