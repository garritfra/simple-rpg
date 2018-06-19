export default class Creature {
  private health: number;
  private baseAttack: number;
  private actualAttack: number;
  private alive: boolean;

  constructor(health: number, baseAttack: number) {
    this.health = health;
    this.baseAttack = baseAttack;
    this.actualAttack = baseAttack;
  }

  public log() {
    console.log("Health: " + this.health);
    console.log("Attack: " + this.baseAttack);
  }

  public attack(creature: Creature) {
    creature.applyDamage(this.actualAttack);
  }

  private applyDamage(damage: number) {
    this.health -= damage;
    if (this.health <= 0) {
      this.alive = false;
    }
  }

  public isAlive(): boolean {
    return this.alive;
  }

  private setHealth(health: number) {
    this.health = health;
  }
}
