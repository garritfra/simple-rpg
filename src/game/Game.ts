import Player from "./model/implementation/Player";

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
    console.log(instance);
    return instance;
  }

  getPlayer(): Player {
    return this.player;
  }
}
