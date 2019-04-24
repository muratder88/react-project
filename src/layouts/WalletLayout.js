import React, { Component } from 'react';
import { Layout } from 'antd';

import WalletHeader from './WalletHeader';
import styles from './WalletLayout.less';

const { Footer } = Layout;

class WalletLayout extends Component {
  componentDidMount() {
    console.log('ComponentDidMount of Wallet Layout');
  }

  render() {
    const {
      children,
      location: { pathname },
    } = this.props;

    return (
      <div>
        <WalletHeader pathname={pathname} />
        <div className={styles.content}>
          <div className={styles.container}>{children}</div>
        </div>
        <Footer>
          <div className={styles.container}>Footer</div>
        </Footer>
      </div>
    );
  }
}

export default WalletLayout;
