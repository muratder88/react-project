import React from 'react';
import _ from 'lodash';
import { List, Row, Col, Icon, Button, Input, Divider, Badge } from 'antd';

const dataSource = [
  {
    name: 'From Web Sales',
    uuid: '5b47dc48-6501-11e9-a923-1681be663d3e',
  },
  {
    name: 'Label this address',
    uuid: '72a6d01a-6501-11e9-a923-1681be663d3e',
  },
];

const BitcoinWalletReceive = () => {
  return (
    <div>
      <List
        dataSource={dataSource}
        renderItem={(item, index) => {
          return (
            <List.Item>
              <Row type="flex" justify="space-around" style={{ width: '100%' }}>
                <Col span={10} style={{ display: 'flex', alignItems: 'center' }}>
                  {_.size(dataSource) !== 1 && (
                    <Badge
                      count={index + 1}
                      style={{
                        marginRight: 10,
                        backgroundColor: '#fff',
                        color: '#999',
                        boxShadow: '0 0 0 1px #d9d9d9 inset',
                      }}
                    />
                  )}
                  {item.name}
                </Col>
                <Col span={10}>
                  <Input addonAfter={<Icon type="setting" />} defaultValue={item.uuid} />
                </Col>
                <Col span={4} style={{ display: 'flex', alignItems: 'center' }}>
                  <Icon type="edit" theme="filled" style={{ paddingLeft: 10, paddingRight: 10 }} />
                  <Divider type="vertical" />
                  <Icon type="setting" theme="filled" style={{ paddingRight: 10 }} />
                </Col>
              </Row>
            </List.Item>
          );
        }}
      />
      <div style={{ paddingTop: 10, textAlign: 'center' }}>
        <Button>Create new address for your Bitcoin Wallet</Button>
      </div>
    </div>
  );
};

export default BitcoinWalletReceive;
