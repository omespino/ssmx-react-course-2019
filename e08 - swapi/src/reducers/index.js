export function categoryResult(state = [], action) {
    console.log("CAT_SEARCH",action)
    switch(action.type) {   
        case 'CAT_SEARCH':
            return action.payload
        case 'CAT_SELECT':
            return action.payload
        default:
            return state
    }
}
export function itemResult(state = [], action) {
    switch(action.type) {
        case 'ITEM_SELECT':
            return action.payload
        default:
            return state
    }
}