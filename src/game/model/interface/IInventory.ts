import Item from "../implementation/Item";

export default interface IInventory {
  inventory: Array<Item>;
  addItem(): void;
  getItemById(id: number): Item;
}
