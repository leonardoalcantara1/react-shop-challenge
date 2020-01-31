import * as types from './actionTypes';

export default function reduce(state:any[] = [], action:any = {}) {
  const actions:any = {
    [types.STORE_PRODUCTS]: () => action.products
  };

  return actions[action.type] ? actions[action.type]() : state; 
}
