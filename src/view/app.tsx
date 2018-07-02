import * as React from "react";
import { Container } from "reactstrap";
import PlayerView from "./components/PlayerView/PlayerView";
import Game from "../game/Game";

export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  handleAttack() {}
  render() {
    return (
      <Container>
        <PlayerView player={Game.getInstance().getPlayer()} />
      </Container>
    );
  }
}
