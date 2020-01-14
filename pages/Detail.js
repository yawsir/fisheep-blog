import React from 'react'
import Head from 'next/head'
import {Header, Author} from '../components'
import {Row, Col, Icon, Tag, Affix} from 'antd'
import axios from 'axios'
import {formatDate} from '../utils'
import {api} from '../blog.config'
import marked from 'marked'
import hljs from 'highlight.js'
import Tocify from '../components/Tocify.tsx'
import '../public/style/page/detail.scss'
import 'highlight.js/styles/monokai-sublime.css'
export default function Detail({article}) {
    const tocify = new Tocify()
    const renderer = new marked.Renderer()
    renderer.heading = function (text, level, raw) {
        const anchor = tocify.add(text, level)
        return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
    }
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
    const markdown = article.article_content
    let html = marked(markdown)

    

    return (
        <div>
            <Head>
                <title>{article.article_title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            <Row className="detail-content content" type="flex" justify="center" >
                <Col className="content-left" xs={24} sm={24} md={16} lg={18} xl={15}>
                    <h2 className="detail-title">{article.article_title}</h2>
                    <div className="detail-props">
                        <p className="detail-date">
                            <Icon type="calendar" /><span className="date">{formatDate(article.article_date)}</span>
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
                        {tocify && tocify.render()}
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