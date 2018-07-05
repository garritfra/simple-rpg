import IInventory from "../interface/IInventory";
import Item from "./Item";

export default class Inventory implements IInventory {
  private inventory: Array<Item>;

  constructor() {
    this.inventory = [];
  }

  addItem(item: Item): void {
    item.setId(this.inventory.length - 1);
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
  getAllItems(): Array<Item> {
    return this.inventory;
  }

  getFirst(): Item {
    return this.inventory[0];
  }
  getLast(): Item {
    return this.inventory[this.inventory.length - 1];
  }
}
