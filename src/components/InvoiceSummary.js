import React from 'react'
import { Table, Icon, Button } from 'antd';

import InvoiceModal from './InvoiceModal'



const InvoiceSummary = () => (
  <div>

      <Table columns={columns} dataSource={data} pagination={false} />
    </div>

)




const columns = [{
  title: 'Invoice Number',
  dataIndex: 'invoice_number',
  key: 'invoice_number',
  render: text => <a href="#"><InvoiceModal number={text}/></a>,
}, {
  title: 'Uniform',
  dataIndex: 'uniform',
  key: 'uniform',
}, {
  title: 'Services',
  dataIndex: 'services',
  key: 'services',
}, {
  title: 'Total',
  dataIndex: 'total',
  key: 'total',
}];

const data = [{
  key: '1',
  invoice_number: 2121,
  uniform: '$ 322',
  services: '$ 25',
  total: '$347'
}, {
  key: '2',
  invoice_number: 4631,
  uniform: '$ 271',
  services: '$ 22',
  total: '$293'
}, {
  key: '3',
  invoice_number: 5839,
  uniform: '$ 125',
  services: '$ 122',
  total: '$247'
}, {
  key: '2',
  invoice_number: 4631,
  uniform: '$ 271',
  services: '$ 22',
    total: '$293'
}


];

export default InvoiceSummary
