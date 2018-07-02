import Inventory from "../implementation/Inventory";
import ICreature from "./ICreature";

export default interface IPlayer extends ICreature {
  getAvatar(): string;
  getInventory(): Inventory;
}
