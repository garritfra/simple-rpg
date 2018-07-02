import * as React from "react";
import IPlayerViewProps from "./IPlayerViewProps";
import IPlayerViewState from "./IPlayerViewState";
import Player from "../../../game/model/implementation/Player";
import { Container } from "reactstrap";
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
      <div>
        <h1>{this.props.player.getName()}</h1>
        <InventoryView inventory={this.player.getInventory()} />
      </div>
    );
  }
}
