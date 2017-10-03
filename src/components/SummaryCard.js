import React from 'react'
import { Card } from 'antd'

const gridStyle = {
  width: '50%',
  textAlign: 'left',
};

const bigGridStyle = {
  width: '100%',
  textAlign: 'left',
};


const SummaryCard = () => (
  <Card
    noHovering
    style={{marginLeft: 10, marginRight: 10}}>
    <Card.Grid style={bigGridStyle}><p>Address</p>
    <h2>1250 Massachusetts Ave, Dorchester, MA 02125</h2>
  </Card.Grid>

    <Card.Grid style={gridStyle}><p>Account Type</p><h2>Local</h2></Card.Grid>
    <Card.Grid style={gridStyle}><p>Payment Type</p><h2>Charge/NET 30</h2></Card.Grid>
    <Card.Grid style={gridStyle}><p>Key Individual</p><h2>Tom Brown</h2></Card.Grid>
    <Card.Grid style={gridStyle}><p>Phone Number</p><h2>978-345-4433</h2></Card.Grid>

    <Card.Grid style={bigGridStyle}><p>Delivery Instructions</p>
    <h2>Stop by the office and show the manager the invoice. Door code #7356</h2>
  </Card.Grid>
  </Card>

)

export default SummaryCard
