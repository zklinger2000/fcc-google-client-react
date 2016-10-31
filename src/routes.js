import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App/App';
import HomePage from './components/HomePage/HomePage';
import LogoutPage from './components/Auth/LogoutPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.js';
import requireAuth from './components/Auth/require_auth_google';
import PrivatePage from './components/PrivatePage/PrivatePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="logout" component={LogoutPage} />
    <Route path="private" component={requireAuth(PrivatePage)} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
