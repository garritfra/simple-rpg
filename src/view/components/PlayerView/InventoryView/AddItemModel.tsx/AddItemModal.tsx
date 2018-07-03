import * as React from "react";
import IAddItemModalProps from "./IAddItemModalProps";
import IAddItemModalState from "./IAddItemModalState";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  FormGroup,
  Label,
  Input,
  Form
} from "reactstrap";
import Item from "../../../../../game/model/implementation/Item";
import Game from "../../../../../game/Game";

export default class AddItemModal extends React.Component<
  IAddItemModalProps,
  IAddItemModalState
> {
  props: IAddItemModalProps;

  constructor(props: IAddItemModalProps) {
    super(props);
    this.props = props;
    this.state = { item: new Item("", 0) };
  }

  handleSubmit(): void {
    console.log(this.state.item);
    Game.getInstance()
      .getPlayer()
      .getInventory()
      .addItem(this.state.item);
    this.props.onCloseCallback();
  }

  render() {
    return (
      <Modal isOpen={this.props.isOpen}>
        <ModalHeader>Add Item</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                id="name"
                onChange={e => this.state.item.setName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="strength">Strength</Label>
              <Input
                type="number"
                id="strength"
                onChange={e =>
                  this.state.item.setStrength(parseInt(e.target.value))
                }
              />
            </FormGroup>
            <Button type="submit">Add</Button>
          </Form>
        </ModalBody>
      </Modal>
    );
  }
}
