import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Switch, Route, IndexRoute }  from 'react-router';
import Header from '../../src/components/header/header.jsx';
import Home from '../../src/components/home/home.jsx';
import Detail from '../../src/components/detail/detail.jsx';
import Life from '../../src/components/life/life.jsx';
import Author from '../../src/components/author/author.jsx';
import store from '../../src/lib/configureStore';
const createHistory = require('history').createHashHistory;
import '../../src/style/base.less';

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
