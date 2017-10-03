
import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import Button from 'antd/lib/button';
import '../styles/App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Home from '../components/Home'

// Make Links Work
import { withRouter } from 'react-router'

import Main from './Main'
import { HeaderBar } from '../components/Header'
import { LeftSideBar } from '../components/LeftSideBar'
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



class App extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    return (
      <div>
      <HeaderBar/>

      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{background: "white"}}
        >


          <LeftSideBar/>
        </Sider>

        <Layout>

          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>Section</Breadcrumb.Item>
              <Breadcrumb.Item>SubSection</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Main/>
            </div>
          </Content>

          <Footer style={{ textAlign: 'center' }}>
            For questions or support about this app click here
          </Footer>

        </Layout>
      </Layout>
    </div>

    );
  }
}

export default App
