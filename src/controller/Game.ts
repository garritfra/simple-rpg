import Player from "../model/Player";
import Enemy from "../model/Enemy";
import Turn from "../model/Turn";

let instance: Game = null;

export default class Game {
  player: Player;
  currentTurn: Turn;

  constructor() {
    this.player = new Player();
    this.currentTurn = new Turn();
  }

  static getInstance(): Game {
    if (!instance) {
      instance = new Game();
    }
    return instance;
  }

  public takeTurn() {
    this.currentTurn = new Turn();
  }
}
