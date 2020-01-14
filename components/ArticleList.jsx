import React, {useEffect, useContext, useState} from 'react'
import {ArticleContext} from '../store/reducers/articleReducer'
import MyCard from './MyCard'
import {Spin} from 'antd'
import {api} from '../blog.config'
import axios from 'axios'
import {formatDate} from '../utils'
import {fetchArticlesAction} from '../store/actionCreater'
export default function ArticleList() {

    const [loading, setLoading] = useState(true)
    const {state, dispatch} = useContext(ArticleContext)
    //获取文章列表
    function getArticlesByTag(){
        axios.post(`${api}/blog/getArticlesByTag`, {
        tags: state.selectedTagsList.map(item => item.tag_id)
        }).then(
            res => {
                setLoading(false)
                const action = fetchArticlesAction(res.data.articles)
                dispatch(action)
            }
        )
        return () => {}

    }
    useEffect(getArticlesByTag,[state.selectedTagsList])


    return (
        <Spin spinning={loading}>
        <div className='article-list' style={{minHeight: '10rem'}}>
            {
                state.articles.map(item => 
                    <MyCard
                        key={item.article_id}
                        id={item.article_id}
                        title={item.article_title}
                        date={formatDate(item.article_date)}
                        tagList={item.tags}
                    ></MyCard>
                )
            }
        </div>
        </Spin>
    )
}

