import React from 'react';
import { connect } from 'dva';
import { Modal, Row, Col, Divider, Icon } from 'antd';

import styles from './FirstModal.less';

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
      visible={isModalVisible}
      onOk={handleModalOk}
      onCancel={handleModalOk}
      footer={null}
      closable={false}
      centered
      width={689}
    >
      <div>
        <div style={{marginRight: 50}}>
          <h2>You have <span style={{fontWeight: 'bold'}}>sent 0.23397 BTC</span> ≈£937.46</h2>
          <Row>
            <Col span={12}>Date</Col>
            <Col span={12} style={{textAlign: "right"}}>14.04.2019 20:33</Col>
          </Row>
          <Divider className={styles.divider} />
          <Row>
            <Col span={12}>Note</Col>
            <Col span={12} style={{textAlign: "right"}}>Thanks for great product</Col>
          </Row>
          <Divider className={styles.divider} />
          <Row>
            <Col span={12}>Receiver</Col>
            <Col span={12} style={{textAlign: "right"}}>779c3c53-57be-4b7f-bee6-0a127cc8fe2d</Col>
          </Row>
          <Divider className={styles.divider} />
          <Row>
            <Col span={12}>Miner Fee</Col>
            <Col span={12} style={{textAlign: "right"}}>0.00014105 BTC</Col>
          </Row>
          <Divider className={styles.divider} />
          <Row>
            <Col span={12}>Mintus Fee</Col>
            <Col span={12} style={{textAlign: "right"}}>-</Col>
          </Row>
          <Divider className={styles.divider} />
          <Row>
            <Col span={12}>Total</Col>
            <Col span={12} style={{textAlign: "right"}}>0.23461139 BTC</Col>
          </Row>
        </div>
        <div style={{position: 'absolute', right: '0', top: 0, width: 50}}>
          <a onClick={handleModalOk}>
            <Icon type="close" style={{color: '#000000', marginTop: 20, fontSize: 36}} />
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default connect(state => {
  return {
    isModalVisible: state.wallets.isModalOpen,
  };
})(FirstModal);
