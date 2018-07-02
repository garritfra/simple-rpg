import IItem from "../interface/IItem";

export default class Item implements IItem {
  private id: number;
  private name: string;
  private strength: number;

  constructor(name: string, strength: number) {
    this.id = null;
    this.name = name;
    this.strength = strength;
  }

  getName(): string {
    throw new Error("Method not implemented.");
  }
  getStrength(): number {
    throw new Error("Method not implemented.");
  }

  setId(id: number): void {
    throw new Error("Method not implemented.");
  }
  getId(): number {
    throw new Error("Method not implemented.");
  }
}
