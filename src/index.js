import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // middleware to use REDUX tools in CHROME
  applyMiddleware(thunk) //saying before you go to reducers, apply middleware.
);

ReactDOM.render( // need to include Provider store, in order to create a STORE (kind of a front-end DB) which is from React-Redux
   <Provider store={store}>
    <App />
   </Provider>,
  document.getElementById('root')

);

registerServiceWorker();
