import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import {Header, MyCard, Author} from '../components'
import {Row, Col, List} from 'antd'
import axios from 'axios'
import {api} from '../blog.config'
const Home = ({home_page}) => {
  const [articleList,setArticleList] = useState(home_page)
  return (
    <div>
      <Head>
        <title>iradw博客</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header selectdKey='home'></Header>
      <Row className="content" type="flex" justify="center" >
          <Col className="content-left" xs={24} sm={24} md={16} lg={18} xl={15}>
            <List  header="最新文章">
              {
                articleList.map(item => (
                  <List.Item key={item.article_id}>
                     <MyCard
                      id={item.article_id}
                      title={item.article_title}
                      date={item.article_date}
                      tagList={item.tags}
                      text={item.article_introduce}
                      atTop={false}
                     ></MyCard>
                  </List.Item>
                ))
              }
            </List>
          </Col>
          <Col className="content-right" xs={0} sm={0} md={7} lg={5} xl={5}>
            <Author></Author>
          </Col>
      </Row>
    </div>
  )
}

Home.getInitialProps = async () => {
  const p = new Promise((resolve) => {
    axios(`${api}/blog/getHomeArticles`)
    .then(
        res => {
          // console.log(res)
          resolve(res.data)
      }
    )
  })
  return await p
}

export default Home
