import axios from 'axios'
export function filterSearchAction(category,searchTerm) {
    return async function(dispatch){
        const response = await axios.get(`https://swapi.co/api/${category}/?search=${searchTerm}`)
        const result = await response.data.results
        dispatch({
            type: 'CAT_SEARCH',
            payload: result
        })
    }
}
export function updateCategoryState(category) {
    return async function(dispatch){
        const response = await axios.get(`https://swapi.co/api/${category}`)
        const result = await response.data.results
        dispatch({
            type: 'CAT_SELECT',
            payload: result
        })
    }
}

export function updateItemState(itemUrl){
    return async function(dispatch){
        const response = await axios.get(itemUrl)
        const result = await response.data
        dispatch({
            type: 'ITEM_SELECT',
            payload: result
        })
    }
}
