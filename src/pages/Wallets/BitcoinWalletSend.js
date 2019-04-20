import React, {Component} from 'react';
import {Form, Input, Slider, Button} from 'antd';

@Form.create()
class BitcoinWalletSend extends Component{
    constructor(props){
        super(props);
        this.state = {
            receiverAddress: '',
            amount: '',
            note: '',
        }
    }

    render(){
        const { getFieldDecorator } = this.props.form;;
        const {receiverAddress, amount, note} = this.state;
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          };
        return (
          <div>
            <Form {...formItemLayout}>
              <Form.Item label="receiver address">
                <Input />
              </Form.Item>
              <Form.Item label="amount">
                <Input />
                <Slider defaultValue={30}  />
                <div style={{float: 'right'}}>5000 BTC Weekly Limit</div>
              </Form.Item>
              <Form.Item label="note">
                <Input />
              </Form.Item>
            </Form>
            <div style={{width: '100%', textAlign: "right"}}>
              <Button type="primary">Continue</Button>
            </div>
          </div>
        )
    }
}

export default BitcoinWalletSend;