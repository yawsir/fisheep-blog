import React, {useContext, useEffect} from 'react'
import TagSelectorUI from './UI/TagSelectorUI'
import {ArticleContext} from '../store/reducers/articleReducer'
import {selectTagAction, removeTagAction, setTagListAction} from '../store/actionCreater'
import {api} from '../blog.config'
import axios from 'axios'
export default function TagSelector() {
    const {state, dispatch} = useContext(ArticleContext)
    // console.log(state)

    const getAllTags = () => {
        axios.get(`${api}/blog/getAllTags`)
        .then(
            res => {
                const action = setTagListAction(res.data.tagList)
                dispatch(action)
            }
        )
    }
    useEffect(getAllTags, [])
    // 选择标签以筛选文章
    const selectTag = (index) => {
        const action = selectTagAction(index)
        dispatch(action)
    }

    // 移除已选择的标签
    const removeTag = (index) => {
        const action = removeTagAction(index)
        dispatch(action)
    }
    
    return (
        <TagSelectorUI tagList={state.tagList} selectedTagsList={state.selectedTagsList} 
        selectTag={selectTag} removeTag={removeTag}></TagSelectorUI>
    )
}

