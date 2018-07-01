import Creature from "./Creature";
import IEnemy from "./interfaces/IEnemy";

export default class Enemy extends Creature implements IEnemy {
  constructor(name: string, health: number, baseAttack: number, level: number) {
    super(name, health, baseAttack, level);
  }
}
