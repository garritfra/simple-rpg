import Game from "../../controller/Game";
import Player from "../../model/Player";
import Enemy from "../../model/Enemy";
import Turn from "../../model/Turn";

export interface IGameState {
  game: Game;
  player: Player;
  enemy: Enemy;
  currentTurn: Turn;
}
