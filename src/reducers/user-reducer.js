import * as actionTypes from '../actions/index.actions';

const initialState = {
    token: null,
    _id: null,
    username: null,
    resources: [],
}

export default function user(state=initialState, action){
    switch(action.type){
        case actionTypes.FETCH_USER_LOGIN_REQUEST_SUCCESS: {
            console.log(action.response)
            return{
                ...state,
                token: action.response.token,
                _id: action.response._id,
                username: 'banana',
                resources: action.response.resources,
            }
        }
        default: {
            return state;
        }
    }
}