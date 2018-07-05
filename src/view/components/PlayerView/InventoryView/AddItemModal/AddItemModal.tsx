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
    this.addToInventory(this.state.item);
    this.resetTemporaryItem();
    this.props.onCloseCallback();
  }

  private resetTemporaryItem() {
    this.setState({ item: new Item("", 0) });
  }

  private addToInventory(item: Item) {
    Game.getInstance()
      .getPlayer()
      .getInventory()
      .addItem(item);
  }

  handleNameChange(e: any) {
    this.state.item.setName(e.target.value);
  }

  render() {
    return (
      <Modal isOpen={this.props.isOpen}>
        <ModalHeader>Add Item</ModalHeader>
        <ModalBody>
          <Form>
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
            <Button onClick={this.handleSubmit.bind(this)}>Add</Button>
          </Form>
        </ModalBody>
      </Modal>
    );
  }
}
