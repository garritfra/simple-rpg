import * as React from "react";
import Game from "../../../game/Game";
import PlayerView from "./PlayerView/PlayerView";

export default class GameView extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <PlayerView player={this.props.game.getPlayer()} />
      </div>
    );
  }
}
