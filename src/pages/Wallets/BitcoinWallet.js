import React, {Component} from 'react';
import {Tabs, Row, Col} from 'antd';

import BitcoinWalletHistory from './BitcoinWalletHistory';
import BitcoinWalletSend from "./BitcoinWalletSend";
import BitcoinWalletReceive from './BitcoinWalletReceive';

const {TabPane} = Tabs;

class BitcoinWallet extends Component{
    
    componentDidMount(){
        // alert('Bitcoin Wallet ');
    }

    
    render(){
        return(
          <div>
            <Row>
              <Col span={12}><h2>Your Bitcoin Wallet</h2></Col>
              <Col span={12}>
                <div style={{display:'flex', flexDirection: 'column'}}>
                  <div style={{width: "100%", float: 'right', textAlign: 'right'}}>1.21342 BTC</div>
                  <span style={{flex: 1, textAlign: 'right'}}>4,876.82</span>
                </div>
                
              </Col>
            </Row>            
            <Tabs>
              <TabPane tab="History" key="1">
                <BitcoinWalletHistory />
              </TabPane>
              <TabPane tab="Receive" key="2"><BitcoinWalletReceive /></TabPane>
              <TabPane tab="Send" key="3"><BitcoinWalletSend /></TabPane>
            </Tabs>
          </div>
        )
    }
}

export default BitcoinWallet;