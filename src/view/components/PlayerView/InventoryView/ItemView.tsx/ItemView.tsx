import * as React from "react";
import IItemViewProps from "./IItemViewProps";
import IItemViewState from "./IItemViewState";

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
    return <li>{this.props.item.getName()}</li>;
  }
}
