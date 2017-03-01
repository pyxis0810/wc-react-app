import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { AUTH_USER } from 'actions';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import store from 'store';

import App from 'components/App';
import Signin from 'routes/Signin';
import Signup from 'routes/Signup';
import Signout from 'routes/Signout';
import Main from 'routes/Main';
import Posts from 'routes/Posts';
import Comments from 'routes/Comments';
import Oauth from 'routes/Oauth';
import NotFound from 'routes/NotFound';

import './less/style.less';
import 'antd/dist/antd.css';

const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: AUTH_USER });
}

const rootRoute = {
  childRoutes: [{
    path: '/',
    component: App,
    indexRoute:  { component: Main },
    childRoutes: [
      Signin,
      Signup,
      Signout,
      Posts,
      Comments,
      Oauth,
      NotFound
    ]
  }]
};

function hashLinkScroll() {
  const { hash } = window.location;
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }, 0);
  }
}

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={enUS}>
      <Router history={browserHistory} routes={rootRoute} onUpdate={hashLinkScroll} />
    </LocaleProvider>
  </Provider>,
  document.getElementById('root')
);
