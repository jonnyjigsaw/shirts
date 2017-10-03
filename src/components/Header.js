import React, { Component } from 'react';
import '../styles/App.css'
import { Layout, Menu, Icon, Breadcrumb, Row, Col, Button } from 'antd';
import HeaderDropdown from './HeaderDropdown'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export class HeaderBar extends React.Component {

  render() {
    return (
      <Header>
      <div className="logo"><img src={require('../assets/images/unifirst-logo.svg')}/></div>
      <div style={{float: "right", width: "200px", display: "flex"}}>
        <img style={{height: "50px", borderRadius: "50%", marginTop: "5px", marginRight:"10px", marginLeft: "10px" }} src={require('../assets/images/driver.png')} />
        <HeaderDropdown/>
      </div>
    </Header>

    );
  }
}
