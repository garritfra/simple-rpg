import * as React from "react";

import { Button, CardColumns, Card, CardTitle, CardBody } from "reactstrap";
import IInventoryViewProps from "./IInventoryViewProps";
import IInventoryViewState from "./IInventoryViewState";
import ItemView from "./ItemView/ItemView";
import AddItemModal from "./AddItemModal/AddItemModal";
import Item from "../../../../../../game/model/implementation/Item";
import ItemGenerator from "../../../../../../game/util/ItemGenerator";

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

  toggleAddItemModal() {
    this.setState({ addItemModalVisible: !this.state.addItemModalVisible });
  }

  handleRemove(item: Item) {
    this.props.inventory.removeItem(item);
    this.setState({ items: null });
    this.setState({ items: this.props.inventory.getAllItems() });
  }

  generateItem() {
    const item = new ItemGenerator().generateItem();
    this.props.inventory.addItem(item);

    this.forceUpdate();
  }

  render() {
    const itemViews = (
      <CardColumns style={{ marginTop: "10px" }}>
        {this.state.items.map((item: Item, i) => {
          return (
            <ItemView
              handleRemove={this.handleRemove.bind(this)}
              item={item}
              key={i}
            />
          );
        })}
      </CardColumns>
    );

    return (
      <Card>
        <AddItemModal
          isOpen={this.state.addItemModalVisible}
          onToggle={this.toggleAddItemModal.bind(this)}
        />
        <CardBody>
          <CardTitle>Inventory</CardTitle>
          <Button onClick={this.toggleAddItemModal.bind(this)}>
            Add Item
          </Button>{" "}
          <Button onClick={this.generateItem.bind(this)}>Generate Item</Button>
          <div>{itemViews}</div>
        </CardBody>
      </Card>
    );
  }
}
