import IDroppable from "./interfaces/IDroppable";

export default class Item implements IDroppable {
  name: string;
  attack: number;

  constructor(name: string, attack: number) {
    this.name = name;
    this.attack = attack;
  }

  drop(): this {
    throw new Error("Method not implemented.");
  }
}
