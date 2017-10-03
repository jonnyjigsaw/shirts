import React, { Component } from 'react'
import { Modal, Button } from 'antd';
import InvoicePreview from './InvoicePreview'

export default class InvoiceModal extends React.Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render(props) {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>{this.props.number}</Button>
        <Modal
          width={"80%"}
          title={<h2>Invoice Number: {this.props.number}</h2>}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" size="large" onClick={this.handleCancel}>Cancel</Button>,
            <Button key="submit" type="primary" size="large" onClick={this.handleOk}>
              Ok
            </Button>,
          ]}
        >
          <InvoicePreview/>
        </Modal>
      </div>
    );
  }
}
