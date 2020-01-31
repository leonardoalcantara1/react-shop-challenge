import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './Reducers';

import loadingMiddleware from '../middlewares/loading';

export const middlewares = [
  thunk,
  logger,
  loadingMiddleware,
];

export const store = createStore(
  reducers(),
  applyMiddleware(...middlewares)
);
