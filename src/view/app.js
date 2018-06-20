import React, { Component } from "react";
import {
  Container,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from "reactstrap";
import Game from "../controller/Game";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      game: Game.getInstance(),
      player: Game.getInstance().player,
      enemy: Game.getInstance().currentTurn.getEnemy(),
      currentTurn: Game.getInstance().currentTurn
    };
  }

  handleTravel() {
    this.state.game.takeTurn();
    this.forceUpdate();
  }

  handleAttack() {
    this.state.player.fight(this.state.enemy);
    this.forceUpdate();
  }
  render() {
    return (
      <Container>
        <Card className="mx-auto">
          <CardBody>
            <CardTitle>{this.state.player.getName()}</CardTitle>
            <CardSubtitle>Level: {this.state.player.getLevel()}</CardSubtitle>
            <CardText>
              Life: {this.state.player.getHealth()}
              <br />
              Attack: {this.state.player.getAttack()}
            </CardText>
            <CardText />
            <Button onClick={this.handleTravel.bind(this)}>Travel</Button>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <CardTitle>{this.state.currentTurn.getEnemy().getName()}</CardTitle>
            <CardSubtitle>Level: {this.state.enemy.getLevel()}</CardSubtitle>
            <CardText>
              Life: {this.state.enemy.getHealth()}
              <br />
              Attack: {this.state.enemy.getAttack()}
            </CardText>
            <Button color="danger" onClick={this.handleAttack.bind(this)}>
              Attack
            </Button>
          </CardBody>
        </Card>
      </Container>
    );
  }
}
