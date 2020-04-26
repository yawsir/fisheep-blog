import React, {useState} from 'react';
import Header from '../components/Header'
import Head from 'next/head'
import {Row, Col} from 'antd'
import '../public/style/page/usefull.scss'
import UtilList from '../components/UtilList'
import axios from 'axios'
import {api} from '../blog.config'

const Usefull = ({utils}) => {
    const [usefullUtilsList] = useState(utils)
    return (
        <div className="usefull">
            <Head>
                <title>常用工具</title>
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

Usefull.getInitialProps = async (context) => {
    return await new Promise( (resolve, reject) => {
        axios.get(`${api}/blog/getUtilsList`)
        .then(
            res => {
                console.log(res)
                resolve(res.data)
            }
        )
        .catch(
            err => {
                reject(err)
            }
        )
    })
}

export default Usefull