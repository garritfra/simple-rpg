import Player from "./model/Player";
import Turn from "./model/Turn";

let instance: Game;

export default class Game {
  private player: Player;
  private currentTurn: Turn;

  private constructor() {
    this.player = new Player();
    this.currentTurn = new Turn();
  }

  static getInstance(): Game {
    if (!instance) {
      instance = new Game();
    }
    return instance;
  }

  public takeTurn(): void {
    this.currentTurn = new Turn();
  }

  public getPlayer(): Player {
    return this.player;
  }

  public getCurrentTurn() {
    return this.currentTurn;
  }
}
