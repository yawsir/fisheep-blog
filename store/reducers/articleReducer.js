import React, {createContext, useReducer} from 'react'
import {SELECT_TAG, REMOVE_TAG, FETCH_ARTICLES, SET_TAGLIST} from '../actionTypes'
const ArticleContext = createContext({})

const articleReducer = (state, action) => {
    switch (action.type) {
        case SELECT_TAG: {
            const newSelectedList = [...state.selectedTagsList]
            const tag = action.tag  //选择的标签
            const flag = newSelectedList.some(item => item.tag_id === tag.tag_id)
            if (flag){
                return state
            }
            newSelectedList.push(tag)
            state.selectedTagsList = newSelectedList
            return Object.assign({}, state, {selectedTagsList: newSelectedList})
        }
        case REMOVE_TAG: {
            const newSelectedList = [...state.selectedTagsList]
            newSelectedList.splice(action.index, 1)
            return Object.assign({}, state, {selectedTagsList: newSelectedList})
        }
        case FETCH_ARTICLES: {
            return Object.assign({}, state, {articles: action.articles})
        }
        case SET_TAGLIST: {
            return Object.assign({}, state, {tagList: action.tagList})
        }
        default: 
            return state
    }
}

const initState = {
    tagList: [
        {
            tag_name: 'HTML', 
            tag_color: 'orange',
            tag_id: 1
        }, 
        {
            tag_name: 'CSS', 
            tag_color: 'green',
            tag_id: 2
        }, 
        {
            tag_name: 'JavaScript', 
            tag_color: 'yellow',
            tag_id: 3
        }, 
          
    ],
    selectedTagsList: [
        
    ],
    articles: [],
}

const ArticleStore = (props) => {
    const [state, dispatch] = useReducer(articleReducer, initState)
    return (
        <ArticleContext.Provider value={{state, dispatch}}>
            {props.children}
        </ArticleContext.Provider>
    )
}

export {ArticleStore, ArticleContext}