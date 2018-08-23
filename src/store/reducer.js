// 使用redux-immutable中的combineReducers函数即可创建immutable对象
import { combineReducers } from 'redux-immutable';
import {reducer as headerReducer} from '../common/header/store';

export default combineReducers({
    header: headerReducer
})