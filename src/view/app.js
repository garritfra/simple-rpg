import React, { Component } from "react";
import { Container, Card, CardBody, CardTitle, CardText } from "reactstrap";
import Game from "../controller/Game";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.game = Game.getInstance();
    this.player = this.game.player;
  }
  render() {
    return (
      <Container>
        <Card>
          <CardBody>
            <CardTitle>Player</CardTitle>
            <CardText>Life: {this.game.player.getHealth()}</CardText>
            <CardText>Attack: {this.game.player.getAttack()}</CardText>
          </CardBody>
        </Card>
      </Container>
    );
  }
}
