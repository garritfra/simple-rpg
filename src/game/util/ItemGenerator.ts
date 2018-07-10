import Item from "../model/implementation/Item";
import { Rarity } from "./Rarity";
import CommonItemNames from "./ItemNames/CommonItemNames";
import RareItemNames from "./ItemNames/RareItemNames";
import EpicItemNames from "./ItemNames/EpicItemNames";
import LegendaryItemNames from "./ItemNames/LegendaryItemNames";

export default class ItemGenerator {
  names: string[];
  rarity: Rarity;
  constructor() {}

  public generateItem(): Item {
    const rarity = this.generateRarity();
    const name = this.generateName(rarity);
    const strength = this.generateStrength(rarity);
    return new Item(name, strength);
  }

  private generateStrength(rarity: Rarity): number {
    return Math.floor(Math.random() * 100 + 1);
  }

  private generateName(rarity: Rarity): string {
    if (rarity === Rarity.Common) {
      return this.pickOneFromListList(CommonItemNames);
    } else if (rarity === Rarity.Rare) {
      return this.pickOneFromListList(RareItemNames);
    } else if (rarity === Rarity.Epic) {
      return this.pickOneFromListList(EpicItemNames);
    } else {
      return this.pickOneFromListList(LegendaryItemNames);
    }
  }

  pickOneFromListList(list: Array<string>) {
    return list[Math.floor(Math.random() * list.length)];
  }

  private generateRarity(): Rarity {
    const seed = Math.random() * 100 + 1;

    if (seed < 50) {
      return Rarity.Common;
    } else if (seed < 80) {
      return Rarity.Rare;
    } else if (seed < 95) {
      return Rarity.Epic;
    } else {
      return Rarity.Legendary;
    }
  }
}
