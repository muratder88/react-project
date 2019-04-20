
import React,{Component} from 'react';
import {Tabs,Icon, Button} from 'antd';
import { connect } from 'dva';

import styles from './Wallets.css';
import FirstModal from './FirsModal';
import BitcoinWallet from './BitcoinWallet';



const {TabPane} = Tabs;

const renderValues = (values) =>{
  if (typeof values === "string"){
    return <div style={{fontSize: 12, fontFamily: "Lato, Reqular", color: "#000000"}}> {values} </div>
  }
  return values.map((item, index) => <div style={{fontSize: 12, fontFamily: "Lato, Reqular", color:"#000000", fontWeight: index===0 ? "bold": "normal"}} key={item.key}>{item.value}</div>)
}
const CustomTab= ({text, icon, values}) => (
  <div style={{width: 300, display: 'flex', flex: 1, flexDirection: 'row', fontFamily:"Lato"}}>
    <div style={{display: "flex", flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Icon type={icon} theme="filled" />
    </div>
    <div style={{display: "flex", flex: 2, alignItems: 'center', justifyContent: 'flex-start', fontFamily: "Lato, Black", fontSize: 16}}>
      <span>{text} </span>
    </div>
    <div style={{display:'flex', flex: 2, flexDirection: 'column', alignItems: "flex-end", justifyContent: 'center'}}>
      {renderValues(values)}
    </div>
  </div>
)
@connect()
class Wallets extends Component {
  componentDidMount(){

  }

  handleModalOk = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'wallets/toogleModal',
    })
  }

  render(){
    console.log("Wallets component is rendering, this.props ", this.props);
    const {dispatch} = this.props;
    return (
      <div>
        <Button onClick={()=> {
          dispatch({
            type: 'wallets/toogleModal'
          })
        }}
        >Open Modal
        </Button>
        <FirstModal />
       
        <Tabs tabPosition="left">
          <TabPane tab={<CustomTab text="Bitcoin Wallet" icon="profile" values={[{value: "6.98020 BTC", key: 1}, {value: "17.899.25", key: 2}]} />} key="1"> <BitcoinWallet /></TabPane>
          <TabPane tab={<CustomTab text="Ethereium Wallet" icon="setting" values={[{value: "311.9802 ETH", key: 1},{value: "12.897.10", key: 2}]} />} key="2"> Content of tab 2</TabPane>
          <TabPane tab={<CustomTab text="Stellar Lumen" icon="book" values="XLM" />} key="3"> Content of tab 2</TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Wallets;
