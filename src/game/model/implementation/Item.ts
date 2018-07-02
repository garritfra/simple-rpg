import IItem from "../interface/IItem";

export default class Item implements IItem {
  name: string;
  strength: number;

  constructor(name: string, strength: number) {
    this.name = name;
    this.strength = this.strength;
  }
}
