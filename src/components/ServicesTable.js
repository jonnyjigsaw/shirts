import React, { Component } from 'react'

import { Table, Button } from 'antd';

const columns = [{
  title: 'Color',
  dataIndex: 'color',
}, {
  title: 'Description',
  dataIndex: 'description',
}, {
  title: 'Style',
  dataIndex: 'style',
},{
  title: 'Quantity',
  dataIndex: 'quantity'
}
];

const data = [
  {
    key: 0,
    color: `Green`,
    description: 'Wipers Imported',
    style: 8021,
    quantity: 12
  },{
    key: 1,
    color: `Orange`,
    description: 'Hand Soap',
    style: 7614,
    quantity: 2
  }, {
    key: 2,
    color: `Yellow`,
    description: 'Urinal Cakes',
    style: 1337,
    quantity: 20
  }
];


class ServicesTable extends React.Component {
  state = {
    selectedRowKeys: [],  // Check here to configure the default column
    loading: false,
  };
  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }
  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <Table bordered rowSelection={rowSelection} columns={columns} dataSource={data} pagination={false} />
        <Button
          type="primary"
          onClick={this.start}
          disabled={!hasSelected}
          loading={loading}
        >
          Delivered
        </Button>
      </div>
    );
  }
}

export default ServicesTable
