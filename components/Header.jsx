import React from 'react'
import '../public/style/component/header.scss'
import {Row, Col, Menu, Icon} from 'antd'
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

            default: {

            }
        }
    } 

    return (
        <div className="header">
            <Row type="flex" justify="center" align="middle">
                <Col span={6} className="logo">Fisheep的博客</Col>
                <Col span={18} className="menu"> 
                    <Menu mode="horizontal" selectedKeys={[selectdKey]} onClick={switchRoute}>
                        <Menu.Item key="home"><Icon type="home"/>首页</Menu.Item>
                        <Menu.Item key="article"><Icon type="read" />文章</Menu.Item>
                        <Menu.Item key="life"><Icon type="coffee" />生活</Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}