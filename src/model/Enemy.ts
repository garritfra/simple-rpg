import Creature from "./Creature";

export default class Enemy extends Creature {
  constructor(name: string, health: number, baseAttack: number, level: number) {
    super(name, health, baseAttack, level);
  }
}
