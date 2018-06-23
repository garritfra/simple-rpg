import Enemy from "../model/Enemy";
import Game from "./Game";

export default class CreatureGenerator {
  private game: Game;

  constructor(game?: Game) {
    if (game) this.game = game;
  }

  public generateEnemy(): Enemy {
    const level: number = this.generateLevel();
    const name = this.generateName(enemyNames);
    const health = this.generateHealth();
    const attack = this.generateAttack();
    return new Enemy(name, health, attack, level);
  }

  private generateName(names: Array<string>): string {
    return names[Math.floor(Math.random() * (names.length - 1))];
  }

  private generateLevel(): number {
    const playerLevel = 1;
    const margin = Math.ceil(playerLevel / 10);
    const creatureLevel =
      playerLevel + this.generateRandomNumber(-margin, margin);
    return creatureLevel;
  }

  private generateHealth(): number {
    return 10;
  }

  private generateAttack(): number {
    return 2;
  }

  private generateRandomNumber(from: number, to: number): number {
    return Math.floor(Math.random() * to + from);
  }
}

const enemyNames: Array<string> = [
  "Acidbeast",
  "Umbrathing",
  "Cavemask",
  "Soilpaw",
  "The Anguished Lump",
  "The Hairy Weirdo",
  "The Grim Lich",
  "The Arctic Vampire Cobra",
  "The Matriarch Storm Scorpion",
  "The Savage Raptor Leopard",
  "Netherscreamer",
  "Spitefiend",
  "Poisoncrackle",
  "Horrorscreamer",
  "The Insidious Child",
  "The Electric Hag",
  "The Insidious Hybrid",
  "The Giant Bane Gorilla",
  "The Blood-Eyed Slayer Tiger",
  "The Ebon Phantom Frog"
];
