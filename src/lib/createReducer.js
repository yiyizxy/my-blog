export default (defaultState, handlers) => {
    return (state = defaultState, action) => {
        return handlers[action.type] ? handlers[action.type](state, action) : state;
    };
};
