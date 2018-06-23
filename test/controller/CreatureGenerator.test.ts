import Game from "../../src/controller/Game";
import CreatureGenerator from "../../src/controller/CreatureGenerator";
import Enemy from "../../src/model/Enemy";

describe("CreatureGenerator", () => {
  describe("constructor", () => {
    it("gets an alternative game instance", () => {
      const game = Game.getInstance();
      const creatureGenerator = new CreatureGenerator(game);
    });
  });

  describe("generateName", () => {
    it("returns a specific name", () => {
      const creatureGenerator = new CreatureGenerator();
      const name = creatureGenerator["generateName"](["Waffle"]);
      expect(name).toBe("Waffle");
    });

    it("chooses a name from a list", () => {
      const creatureGenerator = new CreatureGenerator();
      const name = creatureGenerator["generateName"](["Thor", "Loki"]);

      expect(name).toMatch(/^(Thor|Loki)$/);
    });
  });
  xdescribe("generateLevel", () => {
    const player = Game.getInstance().getPlayer();

    expect(player.getLevel()).toBe(0);
    player.setLevel(10);
    expect(player.getLevel()).toBe(10);
    const creatureGenerator = new CreatureGenerator();
    const creatureLevel = creatureGenerator["generateLevel"]();

    expect(creatureLevel).toBeCloseTo(10, 5);
  });

  describe("generateHealth", () => {});

  describe("generateAttack", () => {});

  describe("generateRandomNumber", () => {
    it("generates a number between 1 and 10", () => {
      const creatureGenerator = new CreatureGenerator();
      const randomNumber = creatureGenerator["generateRandomNumber"](1, 10);
      expect(randomNumber).toBeGreaterThanOrEqual(1);
      expect(randomNumber).toBeLessThanOrEqual(10);
    });
    it("generates a number between 0 and 100", () => {
      const creatureGenerator = new CreatureGenerator();
      const randomNumber = creatureGenerator["generateRandomNumber"](0, 100);
      expect(randomNumber).toBeGreaterThanOrEqual(0);
      expect(randomNumber).toBeLessThanOrEqual(100);
    });
  });
  describe("generateEnemy", () => {
    const creatureGenerator = new CreatureGenerator();
    const creature = creatureGenerator.generateEnemy();
    expect(creature).toBeDefined();
    expect(creature).toBeInstanceOf(Enemy);
  });
});
