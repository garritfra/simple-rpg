import Creature from "./Creature";
import Item from "./Item";
import Turn from "./Turn";
export default class Player extends Creature {
  inventory: Item[];
  currentTurn: Turn;

  constructor(name = "Player", health = 100, baseAttack = 1) {
    super(name, health, baseAttack);
    this.inventory = [new Item("Stick", 1)];
  }

  public getAttack(): number {
    let attack = this.baseAttack;
    this.inventory.forEach(item => (attack += item.attack));
    return attack;
  }

  public getInventory(): Array<Item> {
    return this.inventory;
  }

  fight(creature: Creature) {
    this.attack(creature);
    creature.attack(this);
  }
}
