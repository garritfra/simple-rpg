import Enemy from "./Enemy";

export default class Turn {
  private enemy: Enemy;
  constructor() {
    this.enemy = new Enemy("Rabit", 10, 2, 5);
  }

  public getEnemy(): Enemy {
    return this.enemy;
  }
}
