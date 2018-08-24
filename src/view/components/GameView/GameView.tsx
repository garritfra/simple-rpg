import * as React from "react";
import Game from "../../../game/Game";
import PlayerView from "./PlayerView/PlayerView";

interface IGameViewProps {
  game: Game;
}
interface IGameViewState {}

export default class GameView extends React.Component<
  IGameViewProps,
  IGameViewState
> {
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
