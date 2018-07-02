import IPlayer from "../interface/IPlayer";
import Creature from "./Creature";
import Inventory from "./Inventory";

export default class Player extends Creature implements IPlayer {
  private avatar: string;
  private inventory: Inventory;

  constructor() {
    super("Player");
    this.avatar = "https://api.adorable.io/avatars/150/" + this.getName();
    this.inventory = new Inventory();
  }
  public getAvatar(): string {
    return this.avatar;
  }
  public getInventory(): Inventory {
    return this.inventory;
  }
}
