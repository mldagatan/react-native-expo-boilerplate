import axios from 'axios';

import { ROOT_API } from '../Globals';
import {
  AUTH_SIGN_UP,
  AUTH_SIGN_UP_FAIL,
  AUTHENTICATE_LOGIN,
  AUTH_SET_USER,
  AUTH_FAIL
} from './types';

const signUp = (email, password) => async (dispatch) => {
  const payload = { user: { email, password } };
  const url = `${ROOT_API}/auth`;

  let { data, status } = await axios.post(url, payload);

  if (status === 200) {
    dispatch({ type: AUTH_SIGN_UP, payload: data.data });
  } else {
    dispatch({ type: AUTH_SIGN_UP_FAIL, payload: data.errors.full_messages });
  }
};

const authenticateLogin = (email, password) => async (dispatch) => {
  const payload = { user: { email, password } };
  const url = `${ROOT_API}/auth/sign_in`;

  try {
    let {
      ok,
      headers,
      data
    } = await axios.post(url, payload);

    if (ok) {
      dispatch({ type: AUTHENTICATE_LOGIN, payload: headers });
      dispatch({ type: AUTH_SET_USER, payload: data });
    }
  } catch (error) {
    const { data: { errors } } = error.response;

    dispatch({ type: AUTH_FAIL, payload: errors });
  }
};

export { signUp, authenticateLogin };
