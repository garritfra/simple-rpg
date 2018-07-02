import * as React from "react";
import IPlayerViewProps from "./IPlayerViewProps";
import IPlayerViewState from "./IPlayerViewState";
import Player from "../../../game/model/implementation/Player";

export default class PlayerView extends React.Component<
  IPlayerViewProps,
  IPlayerViewState
> {
  props: IPlayerViewProps;
  player: Player;

  constructor(props: IPlayerViewProps) {
    super(props);
    this.props = props;
    console.log(this.props);
    this.player = this.props.player;
  }

  render() {
    return <h1>{this.props.player.getName()}</h1>;
  }
}
