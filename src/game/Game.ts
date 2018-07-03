import Player from "./model/implementation/Player";
import Item from "./model/implementation/Item";

let instance: Game;

export default class Game {
  private player: Player;
  constructor() {
    this.player = new Player();
  }

  public static getInstance(): Game {
    if (instance == null) {
      instance = new Game();
    }
    return instance;
  }

  getPlayer(): Player {
    return this.player;
  }
}
