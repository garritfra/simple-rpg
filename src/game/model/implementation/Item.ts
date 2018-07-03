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

  public getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }
  public getStrength(): number {
    return this.strength;
  }

  public setStrength(strength: number) {
    this.strength = strength;
  }

  public setId(id: number): void {
    this.id = id;
  }
  public getId(): number {
    return this.id;
  }
}
