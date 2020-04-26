import React from 'react'
import '../public/style/component/header.scss'
import { CoffeeOutlined, HomeOutlined, ReadOutlined, ToolOutlined } from '@ant-design/icons';
import { Row, Col, Menu } from 'antd';
import Router from 'next/router'
export default function Header({selectdKey}) {



    const switchRoute = ({key}) => {
        switch (key) {
            case 'home': {
                Router.push('/')
                break
            }

            case 'article': {
                Router.push('/Article')
                break
            }

            case 'life': {
                Router.push('/Life')
                break
            }

            case 'usefull': {
                Router.push('/Usefull')
                break
            }

            default: {

            }
        }
    } 

    return (
        <div className="header">
            <Row type="flex" justify="center" align="middle">
                <Col span={10} className="logo">Fisheep的博客</Col>
                <Col span={14} className="menu"> 
                    <Menu mode="horizontal" selectedKeys={[selectdKey]} onClick={switchRoute}>
                        <Menu.Item key="home"><HomeOutlined title="首页" />首页</Menu.Item>
                        <Menu.Item key="article" title="文章"><ReadOutlined />文章</Menu.Item>
                        <Menu.Item key="life" title="生活"><CoffeeOutlined />生活</Menu.Item>
                        <Menu.Item key="usefull" title="常用工具"><ToolOutlined />常用工具</Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    );
}