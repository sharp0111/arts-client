import config from '../config';
import {push} from 'connected-react-router';

export const FETCH_USER_SIGNUP_REQUEST_TRIGGERED = 'FETCH_USER_SIGNUP_REQUEST_TRIGGERED';
export const FETCH_USER_SIGNUP_REQUEST_SUCCESS = 'FETCH_USER_SIGNUP_REQUEST_SUCCESS';
export const FETCH_USER_SIGNUP_REQUEST_FAILURE = 'FETCH_USER_SIGNUP_REQUEST_FAILURE';
export const CREATE_USER_REQUEST_SUCCESS = 'CREATE_USER_REQUEST_SUCCESS';

export function registerUser(user) {
    const promise = fetch(`${config.USER_CREATE}`, {
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

export function fetchUserLogin(username, password) {
    console.log('fetch user login');
  const promise = fetch(`${config.USER_ENDPOINT}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username,
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
    //localStorage.setItem(config.TOKEN_CONTENT_KEY, response.token);
    dispatch({
        type: FETCH_USER_LOGIN_REQUEST_SUCCESS,
        response,
    });
    dispatch(push('/search'));
  };

export const LOGOUT_USER_REQUEST_TRIGGERED = 'LOGOUT_USER_REQUEST_TRIGGERED'
export const LOGOUT_USER_REQUEST_SUCCESS = 'LOGOUT_USER_REQUEST_SUCESS'
export const LOGOUT_USER_REQUEST_FAILURE = 'LOGOUT_USER_REQUEST_FAILURE'

export function logoutUserRequest(){
    ('log out user request')    
    return {
        type: {
        onRequest: LOGOUT_USER_REQUEST_TRIGGERED,
        onSuccess: LOGOUT_USER_REQUEST_SUCCESS,
        onFailure: LOGOUT_USER_REQUEST_FAILURE,
        }
    }
}