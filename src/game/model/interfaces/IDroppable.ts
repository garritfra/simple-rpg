import Item from "../Item";

export default interface IDroppable {
  drop(): Item;
}
