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

import DeliveryOverview from './DeliveryOverview'

const Panel = Collapse.Panel;
const TabPane = Tabs.TabPane;

const Summary = () => (
  <Collapse accordion>

    <Panel header={< h2 > Dorchester Brewing Company - 64500 < /h2>} key="1">

    <DeliveryOverview/>

    </Panel>

    <Panel header={< h2 > Shoreditch Grind - 24563 < /h2>} key="2">

      <DeliveryOverview/>

    </Panel>

    <Panel header={< h2 > Essen, NoMad - 35927 < /h2>} key="3">

    <DeliveryOverview/>

    </Panel>

  </Collapse>

)

export default Summary
