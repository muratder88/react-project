import React from 'react';
import { connect } from 'dva';
import {Modal, Icon, Divider, Row, Col, Button, Input} from 'antd';

import styles from './FirstModal.less'

const VerificationModal = ({visible, dispatch}) => {
    const toggleModal = () => {
        dispatch({
            type: 'wallets/toggleVerificationModal'
        })
    }
    return (
      <Modal
        visible={visible}
        onOk={toggleModal}
        footer={null}
        closable={false}
        centered
        width={1026}
      >
      
        <a onClick={toggleModal} style={{position: 'absolute', right: 20,top: 5}}>
          <Icon type="close" style={{color: '#000000', fontSize: 36}} />
        </a>
        <div style={{marginTop: 30, display: 'flex', flex: 1}}>
          <div style={{display: 'flex', flex: 3, flexDirection: 'column'}}>
            <div style={{flex: 1}}>
              <h2>You are <b>sending 0.23397 BTC </b> ≈£937.46 </h2>
            </div>
          
            <div style={{flex: 1}}>
           Enter verification code just sent to you with SMS.<br />
              <div style={{marginTop: 15}}>
                <Input placeholder="Basic usage" style={{width: 80, float: "left", marginRight: 10}} />
                <p style={{paddingTop: 6}}>Didn’t receive? We can <a>send it again.</a></p>
              </div>
             
            </div>
            <div style={{flex: 1}}>
              <Button type="primary" onClick={toggleModal}>
                Send Now
              </Button>
            </div>
          </div>
          <div style={{display: 'flex', flex: 1}}><Divider type="vertical" /></div>
          <div style={{display: 'flex', flex: 5}}>
            <div style={{width: '100%', paddingRight: 20}}>
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
          </div>
        </div>
      </Modal>
);
}

export default connect(({wallets}) => ({
    visible: wallets.verificationModal,
}))(VerificationModal);
