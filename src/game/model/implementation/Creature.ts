import ICreature from "../interface/ICreature";
import Inventory from "./Inventory";

export default class Creature implements ICreature {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
