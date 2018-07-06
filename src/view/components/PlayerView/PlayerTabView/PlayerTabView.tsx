import * as React from "react";
import { Modal, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import InventoryView from "./InventoryView/InventoryView";
import IPlayerTabViewState from "./IPlayerTabViewState";
import IPlayerViewProps from "../IPlayerViewProps";
import classnames from "classnames";

export default class PlayerTabView extends React.Component<
  IPlayerViewProps,
  IPlayerTabViewState
> {
  props: IPlayerViewProps;

  constructor(props: IPlayerViewProps) {
    super(props);
    this.props = props;
    this.state = { activeTab: "inventory" };
  }

  toggle(tab: string) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.activeTab === "inventory"
              })}
              onClick={() => this.toggle("inventory")}
            >
              Inventory
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.activeTab === "stats"
              })}
              onClick={() => this.toggle("stats")}
            >
              Stats
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="inventory">
            <InventoryView inventory={this.props.player.getInventory()} />
          </TabPane>
          <TabPane tabId="stats">Stats will go here!</TabPane>
        </TabContent>
      </div>
    );
  }
}
