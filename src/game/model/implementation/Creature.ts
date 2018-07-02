import ICreature from "../interface/ICreature";

export default class Creature implements ICreature {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName() {
    return this.name;
  }
}
