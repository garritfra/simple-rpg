import Game from "../../src/controller/Game";

describe("Game", () => {
  describe("getInstance", () => {
    it("gets the instance", () => {
      const game = Game.getInstance();
      expect(game).toBeInstanceOf(Game);
    });

    it("is has only one instance", () => {
      const game1 = Game.getInstance();
      const game2 = Game.getInstance();
      expect(game1).toBe(game2);
    });
  });
});
