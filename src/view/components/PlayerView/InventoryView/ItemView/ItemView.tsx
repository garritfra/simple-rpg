import * as React from "react";
import IItemViewProps from "./IItemViewProps";
import IItemViewState from "./IItemViewState";
import { Button, Card, CardBody, CardTitle, CardText } from "reactstrap";
import Game from "../../../../../game/Game";

export default class ItemView extends React.Component<
  IItemViewProps,
  IItemViewState
> {
  props: IItemViewProps;

  constructor(props: IItemViewProps) {
    super(props);
    this.props = props;
    this.state = {};
  }

  handleRemove() {
    this.props.handleRemove(this.props.item);
  }

  render() {
    return (
      <Card>
        <CardBody autoCorrect="true">
          <CardTitle>{this.props.item.getName()}</CardTitle>
          <CardText>Strength: {this.props.item.getStrength()}</CardText>
          <Button onClick={this.handleRemove.bind(this)} color="danger">
            Remove
          </Button>
        </CardBody>
      </Card>
    );
  }
}
