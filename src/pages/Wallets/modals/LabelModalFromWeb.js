import React from 'react';
import { connect } from 'dva';
import {Modal, Row, Col, Icon, Badge, Input} from 'antd';

import FrameImg from '../../../assets/frame.png';

const LabelModalFromWeb = ({visible, dispatch}) => {
    const toggleModal = () => {
        dispatch({
            type: 'wallets/toggleLabelModalFromWeb'
        })
    }
    return (
      <Modal
        visible={visible}
        onOk={toggleModal}
        footer={null}
        closable={false}
        centered
        width={689}
      >
      
        <a onClick={toggleModal} style={{position: 'absolute', right: 20,top: 5}}>
          <Icon type="close" style={{color: '#000000', fontSize: 36}} />
        </a>
        <div style={{marginTop: 30}}>
          <Row>
            <Col span={12} style={{textAlign: 'center'}}>
              <img src={FrameImg} alt='Wallet address' style={{width: 200}} />
              <div>Wallet Address</div>
            </Col>
            <Col span={12}>
              <p>
                <Badge count={1} style={{ marginRight:5, backgroundColor: '#005A32', color: '#999' }} />
                <b>From Web Sales</b>
              </p>
              <p>Wallet Address</p>
              <Input addonAfter={<Icon type="copy" />} defaultValue="mysite" />
              <div style={{marginTop: 10}}>
                <p>XRP Tag</p>
                <Input addonAfter={<Icon type="copy" />} defaultValue="mysite" />
              </div>
            </Col>
          </Row>
        </div>
      </Modal>
);
        }

export default connect(({wallets}) => ({
    visible: wallets.labelModalFromWeb,
}))(LabelModalFromWeb);
