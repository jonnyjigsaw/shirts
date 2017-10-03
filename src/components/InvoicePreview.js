import React from 'react'
import { Table } from 'antd';

const InvoicePreview = () => (
<div>
  <Table
    columns={columns}
    dataSource={data}
    bordered
    size="middle"
  />
</div>
)

const columns = [{
  title: 'Dept',
  dataIndex: 'dept',
  key: 'dept',
  width: 100
},
{
  title: 'Quantity',
  dataIndex: 'quantity',
  key: 'quantity',
  width: 100
}, {
  title: 'Description',
  dataIndex: 'description',
  key: 'description'
},{
  title: 'Charges',
  children: [{
    title: 'Amount',
    dataIndex: 'amountCharge',
    key: 'amountCharge'
  }, {
    title: 'Sales Tax',
    dataIndex: 'salesTaxCharge',
    key: 'salesTaxCharge'
  }, {
    title: 'Total',
    dataIndex: 'totalCharge',
    key: 'totalCharge'
  }],
},{
  title: 'Del Qty',
  dataIndex: 'deliveredQuantity',
  key: 'deliveredQuantity',
  width: 100
}];


const descriptions = ["Green Pants", "Red Shirt", "Grey Trousers", "Green Pants", "Red Shirt", "Grey Trousers", "Top Hat", "Red Shirt", "Grey Trousers", "Top Hat"]

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    dept: "0001",
    quantity: (i*2) + 1,
    description: descriptions[i],
    amountCharge: '5.64',
    salesTaxCharge: "",
    totalCharge: '5.64',
    deliveredQuantity: '',
  });
}

export default InvoicePreview
