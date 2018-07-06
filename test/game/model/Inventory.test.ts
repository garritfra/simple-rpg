import Inventory from "../../../src/game/model/implementation/Inventory";
import Item from "../../../src/game/model/implementation/Item";

let inventory: Inventory;
let hammer: Item;
let axt: Item;

beforeEach(() => {
  inventory = new Inventory();
  hammer = new Item("Hammer", 10);
  axt = new Item("Axt", 20);
});

afterEach(() => {
  inventory = null;
  hammer = null;
  axt = null;
});

describe("Inventory", () => {
  describe("Add Items", () => {
    it("adds an item to the inventory", () => {
      expect(inventory.getAllItems()).toEqual([]);

      const item = new Item("Hammer", 10);
      inventory.addItem(item);
      expect(inventory.getAllItems().length).toBe(1);

      expect(inventory.getAllItems()).toContain(item);
    });

    it("allocates correct ids", () => {
      inventory.addItem(hammer);
      expect(inventory.getItemById(0)).toBe(hammer);

      inventory.addItem(axt);
      expect(inventory.getItemById(0)).toBe(hammer);
      expect(inventory.getItemById(1)).toBe(axt);
    });

    it("overrides duplicate items", () => {
      inventory.addItem(hammer);
      expect(inventory.getItemById(0)).toBe(hammer);

      inventory.addItem(hammer);
      expect(inventory.getItemById(0)).toBeUndefined();
      expect(inventory.getItemById(1)).toBe(hammer);

      inventory.removeItem(hammer);
      expect(inventory.getItemById(0)).toBeUndefined();
      expect(inventory.getItemById(1)).toBeUndefined();
    });
  });

  describe("Remove Items", () => {
    it("removes an item", () => {
      inventory.addItem(hammer);
      expect(inventory.getAllItems().length).toBe(1);
      expect(inventory.getAllItems()).toContain(hammer);

      inventory.removeItem(hammer);
      expect(inventory.getAllItems().length).toBe(0);
      expect(inventory.getAllItems()).not.toContain(hammer);
    });
  });
  describe("Ids", () => {
    it("adds and removes items but keeps the correct ids", () => {
      expect(inventory.getItemById(0)).toBeUndefined();

      inventory.addItem(hammer);
      expect(inventory.getItemById(0)).toBe(hammer);

      inventory.addItem(axt);
      expect(inventory.getItemById(0)).toBe(hammer);
      expect(inventory.getItemById(1)).toBe(axt);

      inventory.removeItem(hammer);
      expect(inventory.getItemById(0)).toBeUndefined();
      expect(inventory.getItemById(1)).toBe(axt);
    });
  });

  describe("Get first item", () => {
    it("gets the first item", () => {
      inventory.addItem(hammer);
      expect(inventory.getFirst()).toBe(hammer);

      inventory.removeItem(hammer);
      expect(inventory.getFirst()).toBeUndefined();
    });

    it("gets no item", () => {
      expect(inventory.getFirst()).toBeUndefined();
    });
  });
  describe("Get last item", () => {
    it("gets the last item", () => {
      expect(inventory.getLast()).toBeUndefined();
      inventory.addItem(axt);
      expect(inventory.getLast()).toBe(axt);

      inventory.removeItem(axt);
      expect(inventory.getLast()).toBeUndefined();
    });

    it("gets no item", () => {
      expect(inventory.getLast()).toBeUndefined();
    });
  });
});
