import React from 'react';
import { Icon, Modal } from 'antd';

class ModalDelete extends React.Component {

  state = { visible: false }

  showModal = () => {
    this.setState({ visible: true });
  }

  handleOk = (e) => {
    this.props.onConfirm(e);
    this.setState({ visible: false });
  }

  handleCancel = (e) => {
    this.setState({ visible: false });
  }

  render() {
    const { text } = this.props;
    return (
      <div>
        <Icon
          type='delete'
          onClick={this.showModal}
        />
        <Modal
          title={`Remove this ${text}?`}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>
            Do you want to remove this {text}? This action can't be undone.
          </p>
        </Modal>
      </div>
    )
  }

}

export default ModalDelete;