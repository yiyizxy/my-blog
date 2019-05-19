import thunk from 'redux-thunk';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from '../reducers/';

const logger = createLogger();
// const store = createStore(combineReducers(reducer), compose(
//     applyMiddleware(thunk, logger),
//     window.devToolExtension ? window.devToolExtension() : (f) => f,
// ));
const store = compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f,
)(createStore)(reducers);

// if (module.hot) {
//     module.hot.accept('../reducers', () => {
//         const nextReducer = require('../reducers').default;
//         store.replaceReducer(combineReducers(nextReducer));
//     });
// }

export default store;
