import * as React from "react";
import IInventoryViewProps from "./IInventoryViewProps";
import IInventoryViewState from "./IInventoryViewState";
import ItemView from "./ItemView.tsx/ItemView";
import Item from "../../../../game/model/implementation/Item";

import { Container, ListGroup } from "reactstrap";

export default class InventoryView extends React.Component<
  IInventoryViewProps,
  IInventoryViewState
> {
  props: IInventoryViewProps;

  constructor(props: IInventoryViewProps) {
    super(props);
    this.props = props;
    this.state = {
      items: this.props.inventory.getAllItems()
    };
  }

  render() {
    const itemViews = (
      <Container>
        <ListGroup>
          {this.state.items.map((item: Item) => {
            return <ItemView item={item} />;
          })}
        </ListGroup>
      </Container>
    );

    return (
      <Container>
        <h1>Inventory</h1>
        <div>{itemViews}</div>
      </Container>
    );
  }
}
