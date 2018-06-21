import Enemy from "./Enemy";
import CreatureGenerator from "../controller/CreatureGenerator";
import Game from "../controller/Game";

export default class Turn {
  private enemy: Enemy;
  constructor() {
    this.enemy = new CreatureGenerator().generateEnemy();
  }

  public getEnemy(): Enemy {
    return this.enemy;
  }
}
