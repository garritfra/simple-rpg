import Player from "../../src/model/Player";
import Item from "../../src/model/Item";

describe("Player", () => {
  describe("constructor", () => {
    it("creates a standard player", () => {
      const player = new Player();
      expect(player.getAttack()).not.toBeFalsy();
      expect(player.getName()).not.toBeFalsy();
      expect(player.getInventory()).toBeInstanceOf(Array);
      expect(player.getLevel()).toBe(1);
    });
  });
  describe("getAttack", () => {
    it("returns the base attack", () => {});
  });
});
