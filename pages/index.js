import React from 'react'
import Head from 'next/head'
import {Header, MyCard, Author, WellChosen} from '../components'
import {Row, Col, List} from 'antd'
import axios from 'axios'
import {formatDate} from '../utils'
import {api} from '../blog.config'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
// import { Router } from 'next/router'
const Home = ({home_page}) => {

  const renderer = new marked.Renderer()
  marked.setOptions({
      renderer: renderer, 
      gfm: true,
      pedantic: false,
      sanitize: false,
      tables: true,
      breaks: false,
      smartLists: true,
      smartypants: false,
      highlight: function (code) {
          return hljs.highlightAuto(code).value;
      }
  })
  // const [loading, setLoading] = useState(false)
  // Router.events.on("routeChangeStart", () => {
  //   // console.log('hhhh')
  //   setLoading(true)
  // })

  // Router.events.on("routeChangeComplete", () => {
  //   // console.log('gggg')
  //   setLoading(false)
  // })

  return (
    <div>
      <Head>
        <title>fisheep博客</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header selectdKey='home'></Header>
      <Row className="content" type="flex" justify="center" >
          <Col className="content-left" xs={24} sm={24} md={16} lg={18} xl={20}>
            <List  header="精选文章">
              {
                home_page.map(item => (
                  <List.Item key={item.article_id}>
                     <MyCard
                      id={item.article_id}
                      title={item.article_title}
                      date={formatDate(item.article_date)}
                      tagList={item.tags}
                      text={marked(item.article_introduce)}
                      atTop={false}
                     ></MyCard>
                  </List.Item>
                ))
              }
            </List>
          </Col>
          <Col className="content-right" xs={0} sm={0} md={7} lg={5} xl={5}>
            <Author></Author>
            <WellChosen></WellChosen>
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
          resolve(res.data)
      }
    )
  })
  return await p
}

export default Home
