import React from 'react';
import { connect } from 'dva';
import { Modal } from 'antd';

const FirstModal = ({ isModalVisible, dispatch }) => {
  console.log('First Modal is rendering ');
  const handleModalOk = () => {
    console.log('handleModalOk dispatch', dispatch);

    dispatch({
      type: 'wallets/toogleModal',
    });
  };

  return (
    <Modal
      title="Basic Modal"
      visible={isModalVisible}
      onOk={handleModalOk}
      onCancel={handleModalOk}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default connect(state => {
  console.log('All state ', state);
  return {
    isModalVisible: state.wallets.isModalOpen,
  };
})(FirstModal);
