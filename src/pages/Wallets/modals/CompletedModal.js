import React from 'react';
import { connect } from 'dva';
import {Modal, Icon, Divider, Button, Input} from 'antd';

const CompletedModal = ({visible, dispatch}) => {
    const toggleModal = () => {
        dispatch({
            type: 'wallets/toggleCompletedModal'
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
         
        <div style={{ position: 'relative', margin: 60, paddingTop: 90, display: 'flex', flex: 1}}>
          <div style={{position: 'absolute', top: 0, height: 60, width: '100%', backgroundColor: '#004A29'}}>
            <div style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
              <div style={{display: 'flex', flex: 2, alignItems: 'center', justifyContent: 'center'}}>
                <h2 style={{color: '#FFFFFF'}}>
                  <Icon type="check-circle" /> Successfully sent 0.23397 BTC ≈ £937.46
                </h2>
              </div>
              <div style={{ height: 60, display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Button style={{color: '#005A32'}}>Your Wallet History</Button>
              </div>
            </div>
          </div>
          <div style={{display: 'flex', flex: 5, flexDirection: 'column'}}>
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
          <div style={{display: 'flex', flex: 1}}><Divider type="vertical" style={{height: '100%'}} /></div>
          <div style={{display: 'flex', flex: 5}}>
          asdfasdfasd
          </div>
        </div>
        
      </Modal>
);
}

export default connect(({wallets}) => ({
    visible: wallets.completedModal,
}))(CompletedModal);
