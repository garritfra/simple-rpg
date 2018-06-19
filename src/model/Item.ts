import IDroppable from "./interfaces/IDroppable";

export default class Item implements IDroppable {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  drop(): this {
    throw new Error("Method not implemented.");
  }
}
