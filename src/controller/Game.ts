import Player from "../model/Player";
import Enemy from "../model/Enemy";

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
