import Creature from "../../../src/game/model/implementation/Creature";

describe("Creature", () => {
  describe("Name", () => {
    it("has a name", () => {
      const creature = new Creature("Fluffykins");
      expect(creature.getName()).toBe("Fluffykins");
    });
  });
});
