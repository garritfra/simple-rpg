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
  }

  private allocateId(): number {
    return ++this.nextId;
  }

  public removeItem(item: Item): void {
    this.inventory = this.inventory.filter((invItem: Item) => {
      return item !== invItem;
    });
  }

  getItemById(id: number): Item {
    return this.inventory.filter((item: Item) => {
      return item.getId() === id;
    })[0];
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
