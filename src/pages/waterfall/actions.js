import { message } from 'antd';
import {CHANGE_LOADING_STATUS, CHANGE_LIST, CHANGE_PAGE} from './actionType';
// import $ from 'jquery';
// import { message } from 'antd'
import page1 from './mock/page1.json';
import page2 from './mock/page2.json';
import page3 from './mock/page3.json';
import page4 from './mock/page4.json';
import page5 from './mock/page5.json';
import page6 from './mock/page6.json';

const map = {
    page1,
    page2,
    page3,
    page5,
    page4,
    page6
}


const actionsCreator = () => {
    const actions = {
        getImages: (page) => {
            return (dispatch) => {
                // $.ajax({

                // })
                dispatch(actions.changeLoading(true));
                setTimeout(() => {
                    const data = map[`page${page}`];
                    if (data) {
                        dispatch(actions.changeList(data.list));
                        dispatch(actions.changeLoading(false));
                        dispatch(actions.changePage(page+1));
                    }
                    else {
                        dispatch(actions.changeLoading(false));
                    }
                }, 500);
            }
        },
        changeLoading: (status) => ({
            type: CHANGE_LOADING_STATUS,
            status
        }),
        changeList: (list) => {
            return {
                type: CHANGE_LIST,
                list
            };
        },
        changePage: page => ({
            type: CHANGE_PAGE,
            page
        })
    }
    return actions;
};

export default actionsCreator;