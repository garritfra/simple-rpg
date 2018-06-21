import React, { Component } from "react";
import {
  Container,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
  Col,
  Row
} from "reactstrap";
import Game from "../controller/Game";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      game: Game.getInstance(),
      player: Game.getInstance().getPlayer(),
      enemy: Game.getInstance()
        .getCurrentTurn()
        .getEnemy(),
      currentTurn: Game.getInstance().getCurrentTurn()
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
        <Row>
          <Col>
            <Card className="mx-auto">
              <CardBody>
                <CardImg src={this.state.player.avatar} top width="100%" />
                <CardTitle>{this.state.player.getName()}</CardTitle>
                <CardSubtitle>
                  Level: {this.state.player.getLevel()}
                </CardSubtitle>
                <CardText>
                  Life: {this.state.player.getHealth()}
                  <br />
                  Attack: {this.state.player.getAttack()}
                </CardText>
                <CardText />
                <Button onClick={this.handleTravel.bind(this)}>Travel</Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardBody>
                <CardImg src={this.state.enemy.avatar} top width="100%" />
                <CardTitle>
                  {this.state.currentTurn.getEnemy().getName()}
                </CardTitle>
                <CardSubtitle>
                  Level: {this.state.enemy.getLevel()}
                </CardSubtitle>
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
          </Col>
        </Row>
      </Container>
    );
  }
}
