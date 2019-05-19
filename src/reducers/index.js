import { combineReducers } from 'redux';
import list from './listReducer';
console.log('====list===',list)

export default combineReducers({
    list,
});
