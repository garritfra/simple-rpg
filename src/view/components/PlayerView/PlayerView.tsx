import * as React from "react";
import IPlayerViewProps from "./IPlayerViewProps";
import IPlayerViewState from "./IPlayerViewState";
import Player from "../../../game/model/implementation/Player";
import { Container, Jumbotron, Col, Row, Button } from "reactstrap";
import PlayerTabView from "./PlayerTabView/PlayerTabView";

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
            <PlayerTabView player={this.props.player} />
          </Jumbotron>
        </Col>
      </Row>
    );
  }
}
