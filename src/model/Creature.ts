export default class Creature {
  private health: number;
  baseAttack: number;
  private actualAttack: number;
  private alive: boolean;
  private level: number;
  private name: string;

  constructor(
    name: string,
    health: number,
    baseAttack: number,
    level: number = 1
  ) {
    this.name = name;
    this.health = health;
    this.baseAttack = baseAttack;
    this.level = level;
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

  public getHealth(): number {
    return this.health;
  }

  public getLevel(): number {
    return this.level;
  }

  public getName(): string {
    return this.name;
  }
}
