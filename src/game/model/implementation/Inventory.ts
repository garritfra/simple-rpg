import IInventory from "../interface/IInventory";
import Item from "./Item";

export default class Inventory implements IInventory {
  private inventory: Array<Item>;

  constructor() {
    this.inventory = [];
  }

  addItem(item: Item): void {
    this.inventory.push(item);
  }
  getItemById(id: number): Item {
    for (const item of this.inventory) {
      if (item.getId() == id) {
        return item;
      }
    }
    return null;
  }
  getAllItems(): Item[] {
    return this.inventory;
  }
}
