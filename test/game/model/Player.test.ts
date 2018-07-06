import Player from "../../../src/game/model/implementation/Player";
import Inventory from "../../../src/game/model/implementation/Inventory";

describe("Player", () => {
  describe("Name", () => {
    const unnamedPlayer = new Player();
    const namedPlayer = new Player("Gandalf");

    expect(unnamedPlayer.getName()).toBe("Player");
    expect(namedPlayer.getName()).toBe("Gandalf");
  });

  describe("Avatar", () => {
    it("gets the image for the name 'Player'", () => {
      const player = new Player("Player");
      const avatar = player.getAvatar();

      expect(player.getName()).toBe("Player");
      expect(player.getAvatar()).toContain("Player");
    });
  });

  describe("Inventory", () => {
    const player = new Player();
    expect(player.getInventory()).toBeInstanceOf(Inventory);
  });
});
