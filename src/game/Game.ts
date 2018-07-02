import ISingleton from "./ISingleton";

let instance: Game;

export default class Game implements ISingleton {
  getInstance(): Game {
    if (instance === null) {
      return new Game();
    }
  }

  private constructor() {}

  public getPlayer() {}
}
