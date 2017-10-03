import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'

import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import {Row, Col, Card} from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export class LeftSideBar extends React.Component {

  render() {
    return (
      <div>


        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">

          <Menu.Item key="1">
              <NavLink to="/"></NavLink>
            <Icon type="scan" />
            <span>Deliveries</span>
          </Menu.Item>

          <Menu.Item key="2">
            <NavLink to="/invoices"></NavLink>
            <Icon type="file" />
            <span>Invoices</span>
          </Menu.Item>
        </Menu>

      </div>



    );
  }
}
