import React from 'react';
import { List, Row, Col, Icon } from 'antd';

const dataSource = [
  {
    code: 'APR09',
    name: 'Sold BTC for Etherreum',
    type: 'Sold',
    price: [{ key: '1', value: '-0.000012 BTC' }, { key: '2', value: '300' }],
  },
  {
    code: 'APR02',
    name: 'Bought BTC with Bardays VISA',
    type: 'Sold',
    price: [{ key: '1', value: '0.2 BTC' }, { key: '2', value: '1,715.20' }],
  },
];
const getIconType = type => {
  switch (type) {
    case 'Sold':
      return 'edit';
    default:
      return 'form';
  }
};

const BitcoinWalletHistory = () => (
  <List
    dataSource={dataSource}
    renderItem={item => {
      return (
        <List.Item>
          <Row type="flex" justify="space-around" style={{ width: '100%' }}>
            <Col span={4}>{item.code}</Col>
            <Col span={16}>
              <Icon type={getIconType(item.type)} theme="filled" style={{ paddingRight: 10 }} />
              {item.name}
            </Col>
            <Col span={4} style={{ textAlign: 'right' }}>
              <div>{item.price[0].value}</div>
              <div>{item.price[1].value}</div>
            </Col>
          </Row>
        </List.Item>
      );
    }}
  />
);

export default BitcoinWalletHistory;
