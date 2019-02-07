import config from '../config';
import {push} from 'connected-react-router';

export const FETCH_USER_SIGNUP_REQUEST_TRIGGERED = 'FETCH_USER_SIGNUP_REQUEST_TRIGGERED';
export const FETCH_USER_SIGNUP_REQUEST_SUCCESS = 'FETCH_USER_SIGNUP_REQUEST_SUCCESS';
export const FETCH_USER_SIGNUP_REQUEST_FAILURE = 'FETCH_USER_SIGNUP_REQUEST_FAILURE';
export const CREATE_USER_REQUEST_SUCCESS = 'CREATE_USER_REQUEST_SUCCESS';

export function registerUser(user) {
    const promise = fetch(`${config.API_BASE_URL}/user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user}),
    });
    return {
        onRequest: FETCH_USER_SIGNUP_REQUEST_TRIGGERED,
        onSuccess: FETCH_USER_SIGNUP_REQUEST_SUCCESS,
        onFailure: FETCH_USER_SIGNUP_REQUEST_FAILURE,
        promise,
    };
  }

export const FETCH_USER_LOGIN_REQUEST_TRIGGERED = 'FETCH_USER_LOGIN_REQUEST_TRIGGERED';
export const FETCH_USER_LOGIN_REQUEST_SUCCESS = 'FETCH_USER_LOGIN_REQUEST_SUCCESS';
export const FETCH_USER_LOGIN_REQUEST_FAILURE = 'FETCH_USER_LOGIN_REQUEST_FAILURE';

export function fetchUserLogin(email, password) {
  const promise = fetch(`${config.API_BASE_URL}/user/login`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email,
        password,
      }),
  });
  return {
      onRequest: FETCH_USER_LOGIN_REQUEST_TRIGGERED,
      onSuccess: handleLoginResponse,
      onFailure: FETCH_USER_LOGIN_REQUEST_FAILURE,
      promise,
  };
}

const handleLoginResponse = (response, dispatch) => {
    dispatch({
        type: FETCH_USER_LOGIN_REQUEST_SUCCESS,
        response,
    });
    dispatch(push('/dashboard'));
  };

export const LOGOUT_USER_REQUEST_TRIGGERED = 'LOGOUT_USER_REQUEST_TRIGGERED'
export const LOGOUT_USER_REQUEST_SUCCESS = 'LOGOUT_USER_REQUEST_SUCESS'
export const LOGOUT_USER_REQUEST_FAILURE = 'LOGOUT_USER_REQUEST_FAILURE'

export function logoutUserRequest(){   
    return {
        type: LOGOUT_USER_REQUEST_SUCCESS,
    }
}

export const FETCH_USER_BASIC_INFO_REQUEST_TRIGGERED = 'FETCH_USER_BASIC_INFO_REQUEST_TRIGGERED';
export const FETCH_USER_BASIC_INFO_REQUEST_SUCCESS = 'FETCH_USER_BASIC_INFO_REQUEST_SUCCESS';
export const FETCH_USER_BASIC_INFO_REQUEST_FAILURE = 'FETCH_USER_BASIC_INFO_REQUEST_FAILURE';

export function fetchUserBasicInfo(token) {
    const promise = fetch(`${config.API_BASE_URL}/user/protected`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${token}`
        }
    });
    return {
        onRequest: FETCH_USER_BASIC_INFO_REQUEST_TRIGGERED,
        onSuccess: FETCH_USER_BASIC_INFO_REQUEST_SUCCESS,
        onFailure: FETCH_USER_BASIC_INFO_REQUEST_FAILURE,
        promise,
    };
}
