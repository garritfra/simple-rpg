import Player from "../../src/model/Player";
import Item from "../../src/model/Item";

describe("Player", () => {
  describe("constructor", () => {
    it("creates a standard player", () => {
      const player = new Player();
      expect(player.getAttack()).not.toBeFalsy();
      expect(player.getName()).not.toBeFalsy();
      expect(player.getInventory()).toBeInstanceOf(Array);
      expect(player.getLevel()).toBe(0);
    });
    it("has custom attributes", () => {
      const player = new Player("Ragnar", 200, 5);
      expect(player.getName()).toBe("Ragnar");
      expect(player.getHealth()).toBe(200);
      expect(player.getAttack()).toBe(5);
    });
  });
  describe("getAttack", () => {
    it("gets the base attack", () => {
      const player = new Player("Ragnar", 100, 5);
      expect(player.getAttack()).toBe(5);
    });

    it("gets the accumulated attack with items", () => {
      const player = new Player("Ragnar", 100, 5);
      expect(player.getAttack()).toBe(5);
      const item = new Item("Sword", 5);
      player.addItem(item);
      expect(player.getInventory()).toContain(item);
      expect(player.getAttack()).toBe(10);
    });
  });
});
