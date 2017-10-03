import React, { Component } from 'react';
import { Button, Menu, Dropdown, Icon } from 'antd';

function handleMenuClick(e) {
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">Manage Account</Menu.Item>
    <Menu.Item key="2">Help</Menu.Item>
    <Menu.Item key="3">Log Out</Menu.Item>
  </Menu>
)

const style = {background: "red"}

export default class HeaderDropdown extends React.Component {
  render(){
    return (
      <div>
        <Dropdown overlay={menu}>
          <Button>
            Doris Smith <Icon type="down" />
          </Button>
        </Dropdown>
      </div>
    )
  }
}
