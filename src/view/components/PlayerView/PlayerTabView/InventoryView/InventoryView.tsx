import * as React from "react";

import {
  Container,
  ListGroup,
  Button,
  Jumbotron,
  Row,
  Col,
  CardDeck,
  CardColumns,
  Card,
  CardTitle,
  CardBody
} from "reactstrap";
import IInventoryViewProps from "./IInventoryViewProps";
import IInventoryViewState from "./IInventoryViewState";
import Item from "../../../../../game/model/implementation/Item";
import Game from "../../../../../game/Game";
import ItemView from "./ItemView/ItemView";
import AddItemModal from "./AddItemModal/AddItemModal";

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
    console.log(this.state.addItemModalVisible);
  }

  handleRemove(item: Item) {
    Game.getInstance()
      .getPlayer()
      .getInventory()
      .removeItem(item);
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
          <Button onClick={this.toggleAddItemModal.bind(this)}>Add Item</Button>
          <div>{itemViews}</div>
        </CardBody>
      </Card>
    );
  }
}
