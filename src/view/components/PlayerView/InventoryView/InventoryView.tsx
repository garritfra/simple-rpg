import * as React from "react";
import IInventoryViewProps from "./IInventoryViewProps";
import IInventoryViewState from "./IInventoryViewState";
import ItemView from "./ItemView.tsx/ItemView";

export default class InventoryView extends React.Component<
  IInventoryViewProps,
  IInventoryViewState
> {
  props: IInventoryViewProps;

  constructor(props: IInventoryViewProps) {
    super(props);
    this.props = props;
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Inventory</h1>
        <ItemView item={this.props.inventory.getLast()} />
      </div>
    );
  }
}
