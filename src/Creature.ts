export default class Creature {
  health: number;
  baseAttack: number;
  constructor(health: number, baseAttack: number) {
    this.health = health;
    this.baseAttack = baseAttack;
  }

  log() {
    console.log("Health: " + this.health);
    console.log("Attack: " + this.baseAttack);
  }
}
