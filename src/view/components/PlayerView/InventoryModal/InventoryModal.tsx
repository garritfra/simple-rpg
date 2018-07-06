import * as React from "react";
import { Modal } from "reactstrap";
import InventoryView from "./InventoryView/InventoryView";
import IInventoryModalProps from "./IInventoryModalProps";

export default class InventoryModal extends React.Component<
  IInventoryModalProps,
  any
> {
  props: IInventoryModalProps;

  constructor(props: IInventoryModalProps) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Modal
        toggle={this.props.onToggleCallback.bind(this)}
        isOpen={this.props.isOpen}
      >
        <InventoryView inventory={this.props.inventory} />
      </Modal>
    );
  }
}
