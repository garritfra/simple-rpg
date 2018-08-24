import Inventory from "../../../../../game/model/implementation/Inventory";

export default interface IInventoryModalProps {
  inventory: Inventory;
  isOpen: boolean;
  onToggleCallback: () => void;
}
