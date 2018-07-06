import Game from "../../src/game/Game";

describe("Game", () => {
  describe("getInstance", () => {
    it("gets one instance", () => {
      const game1 = Game.getInstance();
      const game2 = Game.getInstance();
      expect(game1).toBe(game2);
    });
  });
});
