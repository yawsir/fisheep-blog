import React from 'react'
import Head from 'next/head'
import {Header, Author} from '../components'
import {Row, Col, Icon, Tag, Affix} from 'antd'
import axios from 'axios'
import {api} from '../blog.config'
import marked from 'marked'
import highlight from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import '../public/style/page/detail.scss'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
export default function Detail({article}) {
    console.log(article)
    const renderer = new marked.Renderer()
    marked.setOptions({
        renderer,
        gfm:true,
        pedantic: false,
        sanitize: true,
        tables: true,
        breaks: false,
        smartLists: true,
        highlight(code) {
            return highlight.highlightAuto(code).value  
        }
    })
    const markdown = article.article_content
    let html = marked(markdown)
    return (
        <div>
            <Head>
                <title>{article.article_title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            <Row className="content" type="flex" justify="center" >
                <Col className="content-left" xs={24} sm={24} md={16} lg={18} xl={15}>
                    <h2 className="detail-title">{article.article_title}</h2>
                    <div className="detail-props">
                        <p className="detail-date">
                            <Icon type="calendar" /><span className="date">{article.article_date}</span>
                        </p>
                        <div className="detail-tags">
                            {
                                article.tags.map(item => <Tag key={item.tag_id} color={item.tag_color}>{item.tag_name}</Tag>)
                            }
                        </div>  
                    </div>
                    
                    <div className="mark-down" dangerouslySetInnerHTML={{__html:html}}>
                    </div>
                        
                </Col>
                <Col className="content-right" xs={0} sm={0} md={7} lg={5} xl={5}>
                    <Author></Author>
                    <Affix>
                        <MarkNav className="article-menu"
                        source={markdown} 
                        ordered={true}
                        headingTopOffset={0} 
                        updateHashAuto={false}/>
                    </Affix>

                </Col>
            </Row>

        </div>
    )
}

Detail.getInitialProps = async (context) => {
    const p = new Promise((resolve) => {
        axios.get(`${api}/blog/detail?article_id=${context.query.article_id}`)
        .then(
            res => {
                resolve(res.data)
            }
        )
    })
    return await p
    
}