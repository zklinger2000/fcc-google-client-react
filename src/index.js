/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import { syncHistoryWithStore } from 'react-router-redux';
import { AUTH_USER } from './constants/actionTypes';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

// TODO: Add token timeout data
// Token check for authorized users in localStorage
const userToken = localStorage.getItem('user_token');
const userName = localStorage.getItem('user_name');
if (userToken) {
  // Update application state on page load
  store.dispatch({
    type: AUTH_USER,
    payload: {
      user: {
        name: userName
      }
    }
  });
}

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, document.getElementById('app')
);
