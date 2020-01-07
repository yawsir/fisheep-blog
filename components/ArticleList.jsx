import React, {useEffect, useContext} from 'react'
import {ArticleContext} from '../store/reducers/articleReducer'
import MyCard from './MyCard'
import {api} from '../blog.config'
import axios from 'axios'
import {fetchArticlesAction} from '../store/actionCreater'
export default function ArticleList() {

    const {state, dispatch} = useContext(ArticleContext)
    let source = null
    //获取文章列表
    function getArticlesByTag(){
        source = axios.CancelToken.source()
        axios.post(`${api}/blog/getArticlesByTag`, {
        tags: state.selectedTagsList.map(item => item.tag_id)
        }).then(
            res => {
                const action = fetchArticlesAction(res.data.articles)
                dispatch(action)
            }
        )
        return () => {}

    }
    useEffect(getArticlesByTag,[state.selectedTagsList])


    return (
        <div className='article-list'>
            {
                state.articles.map(item => 
                    <MyCard
                        key={item.article_id}
                        id={item.article_id}
                        title={item.article_title}
                        date={item.article_date}
                        tagList={item.tags}
                    ></MyCard>
                )
            }
        </div>
    )
}

