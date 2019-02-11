import { AUTH_SIGN_UP, AUTH_SIGN_UP_FAIL } from '../actions/types';

const DEFAULT_STATE = {
  signUpErrors: [],
  user: {},
  signUpSuccess: null
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case AUTH_SIGN_UP:
      return { ...state, signUpSuccess: true, user: action.payload };
    case AUTH_SIGN_UP_FAIL:
      return { ...state, signUpSuccess: false, signUpErrors: action.payload };
    default:
      return state;
  }
};
