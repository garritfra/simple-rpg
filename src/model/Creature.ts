export default class Creature {
  private health: number;
  protected baseAttack: number;
  private actualAttack: number;
  protected alive: boolean;
  private level: number;
  private name: string;
  private avatar: string;
  private maxHealth: number;

  constructor(
    name: string,
    health: number,
    baseAttack: number,
    level: number = 0
  ) {
    this.name = name;
    this.health = health;
    this.maxHealth = this.health;
    this.baseAttack = baseAttack;
    this.actualAttack = baseAttack;
    this.level = level;
    this.avatar = `https://api.adorable.io/avatars/500/${this.name}.png`;
    this.alive = true;
  }

  public log() {
    console.log("Health: " + this.health);
    console.log("Attack: " + this.baseAttack);
  }

  public attack(creature: Creature) {
    creature.applyDamage(this.getAttack());
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

  public setLevel(level: number): void {
    this.level = level;
  }

  public getName(): string {
    return this.name;
  }

  public getAttack(): number {
    return this.actualAttack;
  }

  public getAvatar(): string {
    return this.avatar;
  }

  public heal(amount?: number) {
    if (!amount) {
      this.health = this.maxHealth;
    } else {
      this.health += amount;
    }
    if (this.health > this.maxHealth) {
      this.health = this.maxHealth;
    }
  }
}
