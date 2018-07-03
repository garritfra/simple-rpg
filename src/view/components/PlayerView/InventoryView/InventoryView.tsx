import * as React from "react";
import IInventoryViewProps from "./IInventoryViewProps";
import IInventoryViewState from "./IInventoryViewState";
import ItemView from "./ItemView/ItemView";
import Item from "../../../../game/model/implementation/Item";

import { Container, ListGroup, Button, Jumbotron } from "reactstrap";
import AddItemModal from "./AddItemModel.tsx/AddItemModal";

export default class InventoryView extends React.Component<
  IInventoryViewProps,
  IInventoryViewState
> {
  props: IInventoryViewProps;

  constructor(props: IInventoryViewProps) {
    super(props);
    this.props = props;
    this.state = {
      items: this.props.inventory.getAllItems(),
      addItemModalVisible: false
    };
  }

  openAddItemModal() {
    this.setState({ addItemModalVisible: true });
  }

  closeAddItemModal() {
    this.setState({ addItemModalVisible: false });
  }

  render() {
    const itemViews = (
      <ListGroup>
        {this.state.items.map((item: Item, i) => {
          return <ItemView item={item} key={i} />;
        })}
      </ListGroup>
    );

    return (
      <div>
        <h2>Inventory</h2>
        <AddItemModal
          isOpen={this.state.addItemModalVisible}
          onCloseCallback={this.closeAddItemModal.bind(this)}
        />
        <Button onClick={this.openAddItemModal.bind(this)}>Add Item</Button>
        <div>{itemViews}</div>
      </div>
    );
  }
}
