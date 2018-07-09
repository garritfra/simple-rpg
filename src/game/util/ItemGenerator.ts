import Item from "../model/implementation/Item";

export default class ItemGenerator {
  constructor() {}

  public generateItem(): Item {
    return new Item("Hammer", 10);
  }
}
