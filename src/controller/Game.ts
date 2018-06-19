import Player from "../model/Player";

let instance: Game = null;

export default class Game {
  player: Player;

  constructor() {
    this.player = new Player();
  }

  static getInstance(): Game {
    if (!instance) {
      instance = new Game();
    }
    return instance;
  }
}
