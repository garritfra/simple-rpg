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
    this.game = Game.getInstance();
    this.player = this.game.player;
    this.enemy = this.game.currentTurn.getEnemy();
  }

  handleTravel() {
    this.game.takeTurn();
  }
  render() {
    return (
      <Container>
        <Card className="mx-auto">
          <CardBody>
            <CardTitle>{this.player.getName()}</CardTitle>
            <CardSubtitle>Level: {this.player.getLevel()}</CardSubtitle>
            <CardText>
              Life: {this.player.getHealth()}
              <br />
              Attack: {this.player.getAttack()}
            </CardText>
            <CardText />
            <Button onClick={this.handleTravel.bind(this)}>Travel</Button>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <CardTitle>{this.game.currentTurn.getEnemy().getName()}</CardTitle>
            <CardSubtitle>Level: {this.enemy.getLevel()}</CardSubtitle>
            <CardText>
              Life: {this.enemy.getHealth()}
              <br />
              Attack: {this.enemy.getAttack()}
            </CardText>
          </CardBody>
        </Card>
      </Container>
    );
  }
}
