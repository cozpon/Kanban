import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import reducers from './reducers';
import './index.css';

import App from './containers/App';
import Login from './containers/LogIN';
import Register from './containers/Register';


//---------SERVICEWORKERS-------------------
import registerServiceWorker from './registerServiceWorker';

//---------STORE--------------------------
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // middleware to use REDUX tools in CHROME
  applyMiddleware(thunk) //saying before you go to reducers, apply middleware.
);

ReactDOM.hydrate(

  <Provider store={store}>
    <Router>
      <div id="source">
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
  </Provider>,
document.getElementById('root')
);

registerServiceWorker();
