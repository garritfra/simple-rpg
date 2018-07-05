import * as React from "react";
import IInventoryViewProps from "./IInventoryViewProps";
import IInventoryViewState from "./IInventoryViewState";
import ItemView from "./ItemView/ItemView";
import Item from "../../../../game/model/implementation/Item";

import { Container, ListGroup, Button, Jumbotron, Row, Col } from "reactstrap";
import AddItemModal from "./AddItemModal/AddItemModal";
import Game from "../../../../game/Game";

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

  handleRemove(item: Item) {
    Game.getInstance()
      .getPlayer()
      .getInventory()
      .removeItem(item);
    this.forceUpdate();
  }

  render() {
    const itemViews = (
      <ListGroup style={{ marginTop: "10px" }}>
        {this.state.items.map((item: Item, i) => {
          return (
            <ItemView
              handleRemove={this.handleRemove.bind(this)}
              item={item}
              key={i}
            />
          );
        })}
      </ListGroup>
    );

    return (
      <div>
        <AddItemModal
          isOpen={this.state.addItemModalVisible}
          onCloseCallback={this.closeAddItemModal.bind(this)}
        />
        <Col>
          <Row style={{ justifyContent: "space-between" }}>
            <h2>Inventory</h2>
            <Button onClick={this.openAddItemModal.bind(this)}>Add Item</Button>
          </Row>
        </Col>
        <div>{itemViews}</div>
      </div>
    );
  }
}
