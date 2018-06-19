import Creature from "./Creature";

export default class Enemy extends Creature {
  constructor(health: number, baseAttack: number, level: number) {
    super(health, baseAttack, level);
  }
}
