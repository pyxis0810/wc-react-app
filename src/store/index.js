import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import createLogger from 'redux-logger';

import reducers from 'reducers';

const store = createStore(reducers, compose(
  applyMiddleware(
    promiseMiddleware,
    thunk,
    createLogger()
  )
));

export default store;
