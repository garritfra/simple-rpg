import IPlayer from "../interface/IPlayer";
import Creature from "./Creature";
import Inventory from "./Inventory";

export default class Player extends Creature implements IPlayer {
  private avatar: string;
  private inventory: Inventory;

  constructor() {
    super("Player");
    this.avatar = "https://api.adorable.io/avatars/100/" + this.getName();
    this.inventory = new Inventory();
  }
  getAvatar(): string {
    throw new Error("Method not implemented.");
  }
  getInventory(): Inventory {
    throw new Error("Method not implemented.");
  }
}
