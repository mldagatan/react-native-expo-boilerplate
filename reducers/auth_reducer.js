import {
  AUTH_SIGN_UP,
  AUTH_SIGN_UP_FAIL,
  AUTH_SET_USER,
  AUTHENTICATE_LOGIN,
  AUTH_FAIL
} from '../actions/types';

const DEFAULT_STATE = {
  signUpErrors: [],
  user: {},
  signUpSuccess: null,
  accessToken: null,
  client: null,
  expiry: null,
  tokenType: null,
  authSuccess: null,
  authErrors: []
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case AUTH_SIGN_UP:
      return { ...state, signUpSuccess: true, user: action.payload };
    case AUTH_SIGN_UP_FAIL:
      return { ...state, signUpSuccess: false, signUpErrors: action.payload };
    case AUTH_SET_USER:
      return { ...state, signUpSuccess: null, user: action.payload.data };
    case AUTHENTICATE_LOGIN:
      return {
        ...state,
        accessToken: action.payload['access-token'],
        client: action.payload.client,
        expiry: action.payload.expiry,
        tokenType: action.payload['token-type'],
        authSuccess: true
      };
    case AUTH_FAIL:
      return { ...state, authErrors: action.payload, authSuccess: false };
    default:
      return state;
  }
};
