import * as React from "react";
import { Container, Col, Row } from "reactstrap";
import PlayerView from "./components/GameView/PlayerView/PlayerView";
import Game from "../game/Game";

export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      game: Game.getInstance()
    };
  }

  handleAttack() {}
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <PlayerView player={this.state.game.getPlayer()} />
          </Col>
        </Row>
      </Container>
    );
  }
}
