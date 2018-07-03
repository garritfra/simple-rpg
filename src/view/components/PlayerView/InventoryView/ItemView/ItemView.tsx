import * as React from "react";
import IItemViewProps from "./IItemViewProps";
import IItemViewState from "./IItemViewState";
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Row,
  Col,
  Button
} from "reactstrap";

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

  render() {
    return (
      <ListGroupItem>
        <Row>
          <Col>
            <ListGroupItemHeading>
              {this.props.item.getName()}
            </ListGroupItemHeading>
            <ListGroupItemText>
              Strength: {this.props.item.getStrength()}
            </ListGroupItemText>
          </Col>
          <Col>
            <Button color="primary">Equip</Button>{" "}
            <Button color="danger">Remove</Button>
          </Col>
        </Row>
      </ListGroupItem>
    );
  }
}
