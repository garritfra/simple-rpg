import Item from "../../../../../../game/model/implementation/Item";

export default interface IItemViewProps {
  item: Item;
  handleRemove: (item: Item) => void;
}
