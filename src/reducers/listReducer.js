import * as actionType from '../configs/actions';
import createReducer from '../lib/createReducer';

const defaultState = {
    data: {},
};

export default createReducer(defaultState, {
    [actionType.FETCH_DATA]: (state={}, action) => {
        return {
            ...state,
            data: action.data,
        };
    },
});
