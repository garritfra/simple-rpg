import IPlayer from "../interface/IPlayer";
import Creature from "./Creature";
import Inventory from "./Inventory";

export default class Player extends Creature implements IPlayer {
  inventory: Inventory;

  constructor() {
    super("Player");
    this.inventory = new Inventory();
  }
}
