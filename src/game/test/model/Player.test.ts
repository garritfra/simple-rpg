import Player from "../../model/Player";
import Item from "../../model/Item";
import Enemy from "../../model/Enemy";
import Creature from "../../model/Creature";

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
      player.addItemToInventory(item);
      expect(player.getInventory()).toContain(item);
      expect(player.getAttack()).toBe(10);
    });
  });

  describe("inventory", () => {
    it("returns the empty inventory", () => {
      const player = new Player();
      expect(player.getInventory().length).toBe(0);
    });

    it("adds an item to the inventory", () => {
      const player = new Player();
      expect(player.getInventory().length).toBe(0);
      const item = new Item("Thors Hammer", 200);
      player.addItemToInventory(item);

      expect(player.getInventory()).toContain(item);
      expect(player.getInventory().length).toBe(1);
    });
  });

  describe("fight", () => {
    it("fights a creature", () => {
      const player = new Player("Thor", 100, 1);
      const enemy = new Enemy("Loki", 100, 2, 1);
      expect(player.getHealth()).toBe(100);
      expect(enemy.getHealth()).toBe(100);
      player.fight(enemy);
      expect(player.getHealth()).toBe(98);
      expect(enemy.getHealth()).toBe(99);
    });

    it("fights a creature and IT dies", () => {
      const player = new Player("Thor", 1, 1);
      const enemy = new Enemy("Loki", 1, 0, 1);

      expect(player.getHealth()).toBe(1);
      expect(enemy.getHealth()).toBe(1);

      expect(player.isAlive()).toBeTruthy();
      expect(enemy.isAlive()).toBeTruthy();

      player.fight(enemy);

      expect(player.isAlive()).toBeTruthy();
      expect(enemy.isAlive()).toBeFalsy();
    });
  });

  describe("log", () => {
    it("logs the stats of a creature", () => {
      const player: Creature = new Player();
      player.log();
    });
  });

  describe("Heal", () => {
    it("heals fully", () => {
      const player = new Player("Thor", 10, 1);
      expect(player.getHealth()).toBe(10);

      player.fight(new Enemy("Loki", 10, 5, 0));
      expect(player.getHealth()).toBe(5);

      player.heal();
      expect(player.getHealth()).toBe(10);
    });

    it("heals more than full health", () => {
      const player = new Player("Thor", 10, 1);
      expect(player.getHealth()).toBe(10);

      player.fight(new Enemy("Loki", 10, 5, 0));
      expect(player.getHealth()).toBe(5);

      player.heal(10);
      expect(player.getHealth()).toBe(10);
    });

    it("heals partially", () => {
      const player = new Player("Thor", 10, 1);
      expect(player.getHealth()).toBe(10);

      player.fight(new Enemy("Loki", 10, 5, 0));
      expect(player.getHealth()).toBe(5);

      player.heal(1);
      expect(player.getHealth()).toBe(6);
    });
  });
});
