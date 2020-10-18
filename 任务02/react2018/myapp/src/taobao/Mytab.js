import React from 'react';
import { Button, TabBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom';

class Mytab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
        };
    }
    render() {
        const { pathname } = this.props.location;
        return (
            <div style={ {
                position: 'fixed',
                width: '100%',
                bottom: 0
            } }>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="red"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="首页"
                        key="home"
                        icon={
                            <i className='iconfont icon-Homehomepagemenu'></i>                           
                        }
                        selectedIcon={
                            <i className='iconfont icon-Homehomepagemenu1'></i>                           
                        }
                        selected={ pathname === '/' }
                        onPress={ () => {
                            this.props.history.push('/');
                        } }
                        data-seed="logId"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <i className='iconfont icon-icon4'></i>                           
                        }
                        selectedIcon={
                            <i className='iconfont icon-gouwuche'></i>                           
                        }
                        title="购物车"
                        key="cart"
                        selected={ pathname === '/cart' }
                        onPress={ () => {
                            this.props.history.push('/cart')
                        } }
                        data-seed="logId1"
                    ></TabBar.Item>
                    <TabBar.Item
                        icon={
                            <i className='iconfont icon-dingdan'></i>
                        }
                        selectedIcon={
                            <div style={ {
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                            } }
                            />
                        }
                        title="订单列表"
                        key="Friend"
                        selected={ this.state.selectedTab === 'greenTab' }
                        onPress={ () => {

                        } }
                    >
                        
			</TabBar.Item>
                    <TabBar.Item
                        icon={<i className='iconfont icon-wode'></i> }
                        selectedIcon={ { uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' } }
                        title="我的淘宝"
                        key="my"
                        selected={ this.state.selectedTab === 'yellowTab' }
                        onPress={ () => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                        } }
                    >
                        
			</TabBar.Item>
                </TabBar>
            </div>
        );
    }
}
export default withRouter(Mytab);