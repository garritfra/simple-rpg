import Creature from "./Creature";
import Item from "./Item";
export default class Player extends Creature {
  inventory: Item[];

  constructor() {
    super("Player", 100, 1);
    this.inventory = [new Item("Stick", 1)];
  }

  public getAttack(): number {
    let attack = this.baseAttack;
    this.inventory.forEach(item => (attack += item.attack));
    return attack;
  }
}
