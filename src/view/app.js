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
  }

  handleTravel() {
    this.player.takeTurn();
  }
  render() {
    return (
      <Container>
        <Card className="mx-auto">
          <CardBody>
            <CardTitle>{this.player.getName()}</CardTitle>
            <CardSubtitle>Level: {this.player.getLevel()}</CardSubtitle>
            <CardText>Life: {this.player.getHealth()}</CardText>
            <CardText>Attack: {this.player.getAttack()}</CardText>
          </CardBody>
        </Card>
        <Button onClick={this.handleTravel.bind(this)}>Travel</Button>
      </Container>
    );
  }
}
