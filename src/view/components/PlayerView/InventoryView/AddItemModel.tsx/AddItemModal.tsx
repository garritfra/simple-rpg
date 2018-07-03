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

export default class AddItemModal extends React.Component<
  IAddItemModalProps,
  IAddItemModalState
> {
  props: IAddItemModalProps;

  constructor(props: IAddItemModalProps) {
    super(props);
    this.props = props;
    this.state = {
      isOpen: false
    };
  }

  handleClose(): void {
    this.props.close();
  }

  submit(event: Event): void {
    this.handleClose();
  }

  render() {
    return (
      <Modal isOpen={this.props.visible}>
        <ModalHeader>Add Item</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.submit.bind(this)}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" id="name" />
            </FormGroup>
            <FormGroup>
              <Label for="strength">Strength</Label>
              <Input type="number" id="strength" />
            </FormGroup>
            <Button type="submit" onClick={this.submit.bind(this)}>
              Add
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    );
  }
}
