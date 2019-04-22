import React from 'react';
import { Table, Button } from 'antd';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const BitcoinWalletReceive = () => {
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} showHeader={false} pagination={false} />
      <div style={{ paddingTop: 10, textAlign: 'center' }}>
        <Button>Create new address for your Bitcoin Wallet</Button>
      </div>
    </div>
  );
};

export default BitcoinWalletReceive;
