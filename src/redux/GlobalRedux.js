import { createReducer, createActions } from 'reduxsauce';

/* --------------------- Types and Action Creators ---------------- */
const { Types, Creators } = createActions({
  setLoading: ['loading'],
});

export const GlobalTypes = Types;

export default Creators;

/* --------------------- Selectors ---------------- */
export const GlobalSelectors = {
  selectLoading: state => state.global.loading,
};

/* --------------------- Initial State ----------------- */
export const INITIAL_STATE = {
  loading: false,
};

/* ------------------- Reducers --------------------- */
export const setLoading = (state, { loading }) => ({
  ...state,
  loading
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_LOADING]: setLoading,
});