import * as React from "react";
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
import Player from "../model/Player";
import Turn from "../model/Turn";
import Enemy from "../model/Enemy";

export interface IGameState {
  game: Game;
  player: Player;
  enemy: Enemy;
  currentTurn: Turn;
}

export default class App extends React.Component<any, IGameState> {
  constructor(props: any) {
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
                <CardImg src={this.state.player.getAvatar()} top width="100%" />
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
                <CardImg src={this.state.enemy.getAvatar()} top width="100%" />
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
