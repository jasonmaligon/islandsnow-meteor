import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';

export default class Middle extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu">
          <Dropdown item text="MEN">
            <Dropdown.Menu>
              <Dropdown.Item>TANK TOPS</Dropdown.Item>
              <Dropdown.Item>SHIRTS</Dropdown.Item>
              <Dropdown.Item>LONG SLEEVE SHIRTS</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text="WOMEN">
            <Dropdown.Menu>
              <Dropdown.Item>TANK TOPS</Dropdown.Item>
              <Dropdown.Item>SHIRTS</Dropdown.Item>
              <Dropdown.Item>LONG SLEEVE SHIRTS</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text="KIDS">
            <Dropdown.Menu>
              <Dropdown.Item>SHIRTS</Dropdown.Item>
              <Dropdown.Item>ONESIES</Dropdown.Item>
              <Dropdown.Item>SWEATSHIRTS</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text="BRANDS">
          </Dropdown>
          <Menu.Item fitted>SEARCH</Menu.Item>
        </Menu>
    );
  }
}
