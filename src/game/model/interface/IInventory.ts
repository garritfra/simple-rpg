import Item from "../implementation/Item";

export default interface IInventory {
  addItem(): void;
  getItemById(id: number): Item;
  getAllItems(): Array<Item>;
}
