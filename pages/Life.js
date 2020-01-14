import React from 'react'
import Head from 'next/head'
import {Header} from '../components'
import {Row, Col} from 'antd'
import {Author, MyCard} from '../components'
import axios from 'axios'
import {api} from '../blog.config'
export default function Life({articles}) {


    return (
        <div>
            <Head>
                <title>生活</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header selectdKey='life'>
            </Header>
            <Row className="content" type="flex" justify="center" >
                <Col className="content-left" xs={24} sm={24} md={16} lg={18} xl={15}>
                    {
                        articles.map(item => (
                            <MyCard
                                key={item.article_id}
                                title={item.article_title}
                                date={item.article_date}
                                id={item.article_id}
                                tagList={[]}
                            ></MyCard>
                        ))
                    }
                </Col>
                <Col className="content-right" xs={0} sm={0} md={7} lg={5} xl={5}><Author></Author></Col>
            </Row>
        </div>
    )
}

Life.getInitialProps = async () => {
    return await new Promise(resolve => {
        axios.get(`${api}/blog/getArticlesByType?article_type_id=2`)
        .then(res => {
            resolve(res.data)
        })
    })
}