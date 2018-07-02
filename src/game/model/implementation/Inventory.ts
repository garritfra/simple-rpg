import IInventory from "../interface/IInventory";
import Item from "./Item";

export default class Inventory implements IInventory {
  inventory: Array<Item>;

  constructor() {
    this.inventory = [];
  }

  addItem(): void {
    throw new Error("Method not implemented.");
  }
  getItemById(id: number): Item {
    throw new Error("Method not implemented.");
  }
}
