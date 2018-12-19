import * as actionTypes from '../actions/index.actions';

const initialState = {
  _id: null,
  username: null,
  resources: null,
}

export default function user(state=initialState, action){
    switch(action.type){
        case actionTypes.FETCH_USER_LOGIN_REQUEST_SUCCESS: {
            return{
                ...state,
                _id: action.response.userInfo._id,
                username: action.repsonse.userInfo.username,
                resources: action.response.userInfo.resources,
            }
        }
        case actionTypes.LOGOUT_USER_REQUEST_SUCCESS: {
            return {
                state: initialState,
            }
        }
        default: {
            return state;
        }
    }
}