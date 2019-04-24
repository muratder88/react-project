import React from 'react';
import { connect } from 'dva';
import { Modal, Input, Button, Icon } from 'antd';

import styles from './LabelModal.less';

const LabelModal = ({ visible, dispatch }) => {
  const toggleModal = () => {
    dispatch({
      type: 'wallets/toggleLabelModal',
    });
  };
  return (
    <Modal visible={visible} onOk={toggleModal} footer={null} closable={false} centered width={689}>
      <div className={styles.wrapper}>
        <div style={{ flex: 3, padding: 3 }}>
          <Input placeholder="label this address" />
        </div>
        <div style={{ flex: 3, padding: 3 }}>
          <p style={{ fontSize: 10 }}>
            Labeling your addresses is a good idea for avoiding accidental transactions.
          </p>
        </div>
        <div style={{ flex: 1, padding: 5, justifyContent: 'center', alignItems: 'center' }}>
          <Button type="primary" onClick={toggleModal}>
            Save
          </Button>
        </div>
        <div style={{ flex: 1, padding: 5, justifyContent: 'center', alignItems: 'center' }}>
          <a onClick={toggleModal}>
            <Icon type="close" style={{ color: '#000000', fontSize: 36 }} />
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default connect(({ wallets }) => ({
  visible: wallets.labelModal,
}))(LabelModal);
