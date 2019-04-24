import React from 'react';
import { connect } from 'dva';
import { Modal, Button } from 'antd';

import BitcoinImg from '../../../assets/bitcoin.png';

const ConfirmModal = ({ visible, dispatch }) => (
  <Modal
    visible={visible}
    onOk={() => {
      dispatch({
        type: 'wallets/toggleConfirmModal',
      });
    }}
    footer={null}
    closable={false}
    centered
  >
    <div>
      <p>
        <img src={BitcoinImg} alt="bitcoin" />
      </p>
      <b>Only send Bitcoin (BTC) to this wallet.</b>
      <p style={{ marginTop: 10 }}>
        Sending any other digital asset, including Bitcoin Cash (BCH), will result in permanent
        loss.
      </p>
      <div>
        <Button
          type="primary"
          onClick={() => {
            dispatch({
              type: 'wallets/toggleConfirmModal',
            });
          }}
        >
          I Understand
        </Button>
      </div>
    </div>
  </Modal>
);

export default connect(state => {
  return {
    visible: state.wallets.confirmModal,
  };
})(ConfirmModal);
