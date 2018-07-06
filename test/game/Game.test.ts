import Game from "../../src/game/Game";

describe("Game", () => {
  describe("getInstance", () => {
    it("gets one instance", () => {
      const game1 = Game.getInstance();
      const game2 = Game.getInstance();
      expect(game1).toBe(game2);
    });
  });

  describe("getPlayer", () => {
    it("gets the player that is assigned to the game", () => {
      const game = Game.getInstance();
      const player = game.getPlayer();
      expect(player).toBe(Game.getInstance().getPlayer());
    });
  });
});
