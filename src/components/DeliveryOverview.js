import React from 'react'
import {Collapse} from 'antd';
import MapView from './MapView'
import SummaryCard from './SummaryCard'
import SummaryServiceRequests from './SummaryServiceRequests'
import RSANotifications from './RSANotifications'
import {Tabs, Icon} from 'antd';
import {Row, Col, Card} from 'antd';
import WearerTable from './WearerTable'
import ServicesTable from './ServicesTable'

const TabPane = Tabs.TabPane;

export default class DeliveryOverview extends React.Component {

  render() {
    return (
      <div>


        <Tabs defaultActiveKey="1">
          <TabPane tab={< span > <Icon type="gift"/>Current Delivery < /span>} key="1">
            <Col span={12} style={{
              padding: 20
            }}>
              <h1>Wearer Items</h1>
              <WearerTable/>
            </Col>

            <Col span={12} style={{
              padding: 20
            }}>
              <h1>Services</h1>
              <ServicesTable/>
            </Col>

          </TabPane>

          <TabPane tab={< span > <Icon type="idcard"/>Customer Details < /span>} key="2">
            <Row>
              <Col span={8}>
                <div style={{
                  width: '100%',
                  height: '400px'
                }}>
                  <MapView/>
                </div>
              </Col>
              <Col span={8}>

                <SummaryCard/>

              </Col>
              <Col span={8}>
                <Row>
                  <SummaryServiceRequests/>
                </Row>
                <Row style={{
                  paddingTop: 10
                }}>
                  <RSANotifications/>
                </Row>

              </Col>
            </Row>

          </TabPane>
        </Tabs>


      </div>



    );
  }
}
