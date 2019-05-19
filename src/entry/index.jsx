import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Switch, Route, IndexRoute }  from 'react-router';
import Header from '../components/header/header.jsx';
import Home from '../components/home/home.jsx';
import Detail from '../components/detail/detail.jsx';
import Life from '../components/life/life.jsx';
import Author from '../components/author/author.jsx';
import store from '../lib/configureStore';
const createHistory = require('history').createHashHistory;
import '../style/base.less';

const history = createHistory();

// if (module.hot) {
//     module.hot.accept('../containers/base/RouterContainer.js', () => {
//         const NextApp = require('../containers/base/RouterContainer.js').default;
//         render(NextApp);
//     });
// }

ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <div className = "blogbox">
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />  {/* 当你只想匹配'/'时，你需要使用"exact"参数*/}
                    <Route path="/home" component={Home} />
                    <Route path="/detail" component={Detail} />
                    <Route path="/life" component={Life} />
                    <Route path="/author" component={Author} />
                    {/* <IndexRoute component={Index} /> */}
                </Switch>
            </div>
        </Router>
    </Provider>
  ), document.getElementById('app'))
