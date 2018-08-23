import * as constants from './constants';
import { fromJS } from 'immutable';

// 将state对象转变为immutable对象，即不可变对象
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});

// reducer中不可直接更改state，需要返回一个新的对象
export default (state=defaultState, action) => {
    switch (action.type) {
        case constants.SEARCH_FOCUS:
            // immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.CHANGE_LIST:
            // 此时action.data已经是immutable类型的数据，因此可以直接设置list
            // merge可以设置多条数据，等价于state.set().set()
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            });
        case constants.MOUSE_ENTER:
            return state.set('mouseIn', true)
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false)
        case constants.CHANGE_PAGE:
            return state.set('page', action.page)
        default:
            return state;
    }
}