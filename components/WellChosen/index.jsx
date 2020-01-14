import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {api} from '../../blog.config'
import './WellChosen.scss'
const WellChosen = () => {
    const [articlesInfo, setArticlesInfo] = useState({articles:[]})
    const getWellChosen = () => {
        axios.get(`${api}/blog/getQiwuArticles`)
        .then(res => {
            console.log(res)
            setArticlesInfo(()=>res.data)
        })
    }
    useEffect(() => {
        getWellChosen()
    }, [])

    return (
        <div className="wellchosen">
            <h3 className="wellchosen-title">本周奇舞精选文章({articlesInfo.date})</h3>
            <ul className="articles-list">
                {
                    articlesInfo.articles.map( (item, index) => (
                    <li className="article-item" key={index}><a href={item.link} target="_blank">{index+1}.&nbsp;{item.title}</a></li>
                    ))
                }
            </ul>
            <a href={articlesInfo.originLink} className="origin-link" target="_blank">原文地址</a>
        </div>
    )
}

export default WellChosen
