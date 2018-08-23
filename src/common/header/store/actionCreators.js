import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

// 此方法不需要暴露出去
const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),  // 将数据变为immutable类型的数据
    totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
})

// 未使用redux-thunk时，需返回一个对象
export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
})

export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
})

export const getList = () => {
    // 使用redux-thunk后此处即可返回一个函数
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data))
        }).catch((err) => {
            console.log(err)
        })
    }
}