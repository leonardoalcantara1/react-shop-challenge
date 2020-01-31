import * as types from './actionTypes';

const initialState = true;


export default function reduce(state:boolean = initialState, action:any = {}) {
  const actions:any = {
    [types.SET_LOADING]: () => action.isLoading
  };

  return actions[action.type] ? actions[action.type]() : state; 
}
