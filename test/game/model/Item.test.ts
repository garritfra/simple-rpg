import Item from "../../../src/game/model/implementation/Item";

describe("Item", () => {
  describe("constructor", () => {
    it("is of instance Item", () => {
      const hammer = new Item("Hammer", 10);
      expect(hammer).toBeInstanceOf(Item);
    });
  });

  describe("Name", () => {
    it("sets the name", () => {
      const item = new Item("Axt", 10);
      expect(item.getName()).toBe("Axt");

      item.setName("Hammer");
      expect(item.getName()).toBe("Hammer");
    });
  });

  describe("Strength", () => {
    it("sets the strength", () => {
      const item = new Item("Hammer", 10);
      expect(item.getStrength()).toBe(10);

      item.setStrength(20);
      expect(item.getStrength()).toBe(20);
    });
  });

  describe("Id", () => {
    it("doesn't have an id on creation", () => {
      const item = new Item("Hammer", 10);
      expect(item.getId()).toBeNull();
    });

    it("returns an assigned id", () => {
      const item = new Item("Hammer", 10);
      expect(item.getId()).toBeNull();

      item.setId(10);
      expect(item.getId()).toBe(10);
    });
  });
});
