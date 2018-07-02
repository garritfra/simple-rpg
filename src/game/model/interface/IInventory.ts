import Item from "../implementation/Item";

export default interface IInventory {
  addItem(item: Item): void;
  getItemById(id: number): Item;
  getAllItems(): Array<Item>;
}
