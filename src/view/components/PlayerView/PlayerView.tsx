import * as React from "react";
import IPlayerViewProps from "./IPlayerViewProps";
import IPlayerViewState from "./IPlayerViewState";
import Player from "../../../game/model/implementation/Player";
import { Container, Jumbotron, Col, Row, Button } from "reactstrap";
import InventoryView from "./InventoryModal/InventoryView/InventoryView";
import InventoryModal from "./InventoryModal/InventoryModal";

export default class PlayerView extends React.Component<
  IPlayerViewProps,
  IPlayerViewState
> {
  props: IPlayerViewProps;
  player: Player;

  constructor(props: IPlayerViewProps) {
    super(props);
    this.props = props;
    this.player = this.props.player;
    this.state = { inventoryModalIsOpen: false };
  }

  toggleInventoryModal() {
    this.setState({ inventoryModalIsOpen: !this.state.inventoryModalIsOpen });
  }

  render() {
    return (
      <Row>
        <Col>
          <Jumbotron>
            <img src={this.player.getAvatar()} />
            <h1>{this.props.player.getName()}</h1>
            <InventoryModal
              onToggleCallback={this.toggleInventoryModal.bind(this)}
              isOpen={this.state.inventoryModalIsOpen}
              inventory={this.player.getInventory()}
            />
            <Button onClick={this.toggleInventoryModal.bind(this)}>
              Inventory
            </Button>
          </Jumbotron>
        </Col>
      </Row>
    );
  }
}
