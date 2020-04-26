import React, {useState} from 'react';
import Header from '../components/Header'
import Head from 'next/head'
import {Row, Col} from 'antd'
import '../public/style/page/usefull.scss'
import UtilList from '../components/UtilList'

const mockData = [
    {
        utilCateId: '1',
        utilCateName: '前端框架',
        list: [ 
            {
                utilId: '11',
                utilLogo: 'https://cn.vuejs.org/images/logo.png',
                utilSite: 'https://react.docschina.org/',
                utilName: '渐进式框架Vue'
            },
            {
                utilId: '12',
                utilLogo: 'https://www.runoob.com/wp-content/uploads/2016/02/react.png',
                utilSite: 'https://react.docschina.org/',
                utilName: '扩展性超强的React'
            },
        ]
    },
    {
        utilCateId: '2',
        utilCateName: '图标字体',
    }
]


const Usefull = () => {

    const [usefullUtilsList] = useState(mockData)

    return (
        <div className="usefull">
            <Head>
                <title>{123}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header selectdKey="usefull"></Header>
            <Row className="usefull-wrap content" type="flex" justify="center">
                <Col xs={24} sm={24} md={23} lg={23} xl={20} className="usefull-content">
                    {
                        !!usefullUtilsList && usefullUtilsList.map( item => <UtilList key={item.utilCateId} utilCateName={item.utilCateName} list={item.list}></UtilList> )
                    }
                </Col>
            </Row>
        </div>
    )
}

export default Usefull