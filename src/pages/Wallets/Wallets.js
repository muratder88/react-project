import React, { Component } from 'react';
import { Tabs, Button, Row, Col } from 'antd';
import { connect } from 'dva';

import BitcoinWallet from './BitcoinWallet';
import FirstModal from './modals/FirstModal';
import ConfirmModal from './modals/ConfirmModal';
import LabelModal from './modals/LabelModal';
import LabelModalFromWeb from './modals/LabelModalFromWeb';
import VerificationModal from './modals/VerificationModal';
import CompletedModal from './modals/CompletedModal';

import styles from './Wallets.less';
import BitcoinImg from '../../assets/bitcoin.png';

const { TabPane } = Tabs;

const renderValues = values => {
  if (typeof values === 'string') {
    return (
      <div style={{ fontSize: 12, fontFamily: 'Lato, Reqular', color: '#000000' }}> {values} </div>
    );
  }
  return values.map((item, index) => (
    <div
      style={{
        fontSize: 12,
        fontFamily: 'Lato, Reqular',
        color: '#000000',
        fontWeight: index === 0 ? 'bold' : 'normal',
      }}
      key={item.key}
    >
      {item.value}
    </div>
  ));
};
const CustomTab = ({ text, values }) => (
  <div style={{ width: 300, fontFamily: 'Lato' }}>
    <Row type="flex">
      <Col span={4}>
        <div
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
        
          <img src={BitcoinImg} alt="bitcoin" width="24" />
        </div>
      </Col>
      <Col span={10}>
        <div
          style={{
            height: '100%',
            display: 'flex',
            flex: 1,
            textAlign: 'left',
            alignItems: 'center',
            fontFamily: 'Lato',
            fontSize: 16,
          }}
        >
          <span>{text} </span>
        </div>
      </Col>
      <Col span={10}>
        <div style={{ height: '100%', justifyContent: 'center' }}>{renderValues(values)}</div>
      </Col>
    </Row>
  </div>
);
@connect()
class Wallets extends Component {
  componentDidMount() {}

  handleModalOk = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'wallets/toogleModal',
    });
  };

  render() {
    // console.log("Wallets component is rendering, this.props ", this.props);
    const { dispatch } = this.props;
    return (
      <div>
        <div>
          <Button
            onClick={() => {
              dispatch({
                type: 'wallets/toogleModal',
              });
            }}
          >
            Open Modal .
          </Button>

          <Button
            onClick={() => {
              dispatch({
                type: 'wallets/toggleConfirmModal',
              });
            }}
          >
            Confirm Modal
          </Button>
          <Button
            onClick={() => {
              dispatch({
                type: 'wallets/toggleLabelModal',
              });
            }}
          >
            Label Modal
          </Button>
          <Button
            onClick={() => {
              dispatch({
                type: 'wallets/toggleLabelModalFromWeb',
              });
            }}
          >
            Label Modal From Web
          </Button>
          <Button
            onClick={() => {
              dispatch({
                type: 'wallets/toggleVerificationModal',
              });
            }}
          >
            Verification Modal
          </Button>
          <Button
            onClick={() => {
              dispatch({
                type: 'wallets/toggleCompletedModal',
              });
            }}
          >
            Completed Modal
          </Button>
        </div>

        <FirstModal />
        <ConfirmModal />
        <LabelModal />
        <LabelModalFromWeb />
        <VerificationModal />
        <CompletedModal />

        <Tabs tabPosition="left" className={styles.mainTab}>
          <TabPane
            tab={
              <CustomTab
                text="Bitcoin Wallet"
                icon="profile"
                values={[{ value: '6.98020 BTC', key: 1 }, { value: '17.899.25', key: 2 }]}
              />
            }
            key="1"
          >
            {' '}
            <BitcoinWallet />
          </TabPane>
          <TabPane
            tab={
              <CustomTab
                text="Ethereium Wallet"
                icon="setting"
                values={[{ value: '311.9802 ETH', key: 1 }, { value: '12.897.10', key: 2 }]}
              />
            }
            key="2"
          >
            {' '}
            Content of tab 2
          </TabPane>
          <TabPane tab={<CustomTab text="Stellar Lumen" icon="book" values="XLM" />} key="3">
            {' '}
            Content of tab 2
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Wallets;
