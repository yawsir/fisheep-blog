import React from 'react'
import {Header, TagSelector, ArticleList} from '../components'
import Head from 'next/head'
import {Row, Col} from 'antd'
import {ArticleStore} from '../store/reducers/articleReducer'
export default function Article() {
    return (
    <div>
      <Head>
        <title>文章</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header selectdKey="article">
      </Header>
      <ArticleStore>
        <Row className="content" type="flex" justify="center" >
            <Col className="content-left" xs={24} sm={24} md={16} lg={18} xl={15}>
              
                <ArticleList></ArticleList>
              
            </Col>

            <Col className="content-right" xs={0} sm={0} md={7} lg={5} xl={5}>
              <TagSelector></TagSelector>
            </Col>
        </Row>
      </ArticleStore>
    </div>
    )
}

