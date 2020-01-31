import * as types from './actionTypes';

export const setLoading = (isLoading: boolean) => ({
  type: types.SET_LOADING,
  isLoading,
});
