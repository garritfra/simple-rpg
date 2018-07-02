import * as React from "react";
import IPlayerViewProps from "./IPlayerViewProps";
import IPlayerViewState from "./IPlayerViewState";
import Player from "../../../game/model/implementation/Player";
import { Container, Jumbotron, Col, Row } from "reactstrap";
import InventoryView from "./InventoryView/InventoryView";

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
  }

  render() {
    return (
      <Row>
        <Col xs="6">
          <Jumbotron>
            <img src={this.player.getAvatar()} />
            <h1>{this.props.player.getName()}</h1>
          </Jumbotron>
        </Col>
        <Col xs="6">
          <InventoryView inventory={this.player.getInventory()} />
        </Col>
      </Row>
    );
  }
}
