import { combineReducers } from 'redux';

import loading from './loading/reducer';
import cart from './cart/reducer';

export default () =>
  combineReducers({
    loading,
    cart,
  });
