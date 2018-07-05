import IInventory from "../interface/IInventory";
import Item from "./Item";

export default class Inventory implements IInventory {
  private inventory: Array<Item>;
  private nextId: number;

  constructor() {
    this.inventory = [];
    this.nextId = -1;
  }

  addItem(item: Item): void {
    item.setId(this.allocateId());
    this.inventory.push(item);
    console.log(this.nextId);
  }

  allocateId(): number {
    return ++this.nextId;
  }

  removeItem(item: Item): void {
    const index = this.inventory.indexOf(item);
    delete this.inventory[index];
  }

  getItemById(id: number): Item {
    return this.inventory[id];
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
