import Game from "../../game/Game";
import Player from "../../game/model/Player";
import Enemy from "../../game/model/Enemy";
import Turn from "../../game/model/Turn";

export interface IGameState {
  game: Game;
  player: Player;
  enemy: Enemy;
  currentTurn: Turn;
}
