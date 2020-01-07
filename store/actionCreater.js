import {SELECT_TAG, REMOVE_TAG, FETCH_ARTICLES, SET_TAGLIST} from './actionTypes'

/**
 * 
 * @param {Object} tag 选择的标签 
 */
export const selectTagAction = (tag) => {
    const action = {
        type: SELECT_TAG,
        tag
    }
    return action
}

/**
 * 
 * @param {number} index 要移除的标签在selectedTagsList中的索引
 */
export const removeTagAction = (index) => {
    const action = {
        type: REMOVE_TAG,
        index
    }
    return action
}

/**
 * 
 * @param {array} articles 请求的列表文章
 */
export const fetchArticlesAction = (articles) => {
    const action = {
        type: FETCH_ARTICLES,
        articles
    }
    return action
}

/**
 * 
 * @param {array} tagList 请求的表且列表
 */
export const setTagListAction = (tagList) => {
    const action = {
        type: SET_TAGLIST,
        tagList
    }
    return action
}