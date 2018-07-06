import Item from "../../../../../game/model/implementation/Item";

export default interface IInventoryViewState {
  items: Array<Item>;
  addItemModalVisible: boolean;
}
