import  {CHANGE_LOADING_STATUS, CHANGE_LIST, CHANGE_PAGE} from '../actionType'
const initState = {
    loading: true,
    list: [],
    page: 1
}
const list = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_LOADING_STATUS:
            return Object.assign({}, state, {
                loading: action.status
            });
        case CHANGE_LIST:
            return Object.assign({}, state, {
                list: state.list.concat(action.list)
            });
        case CHANGE_PAGE:
            return Object.assign({}, state, {
                page: action.page
            });
        default:
            return state;
    }

}

export default list;