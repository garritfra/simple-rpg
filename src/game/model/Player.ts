import Creature from "./Creature";
import Item from "./Item";
import Turn from "./Turn";
import IPlayable from "./interfaces/IPlayable";
export default class Player extends Creature implements IPlayable {
  private inventory: Item[];
  currentTurn: Turn;

  constructor(name = "Player", health = 100, baseAttack = 1) {
    super(name, health, baseAttack);
    this.inventory = [];
  }

  public getAttack(): number {
    let attack = this.baseAttack;
    this.inventory.forEach(item => (attack += item.attack));
    return attack;
  }

  public getInventory(): Array<Item> {
    return this.inventory;
  }

  public addItemToInventory(item: Item): Item {
    this.inventory.push(item);
    return item;
  }

  fight(creature: Creature) {
    this.attack(creature);
    creature.attack(this);
  }
}
