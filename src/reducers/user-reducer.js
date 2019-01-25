import * as actionTypes from '../actions/index.actions';

const initialState = {
    token: null,
    _id: null,
    firstName: null,
    lastName: null,
    avatar: null,
    address_1: null,
    address_2: null,
    city: null,
    state: null,
    zipcode: null,
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
                firstName: action.response.firstName,
                lastName: action.response.lastName,
                avatar: action.response.avatar,
                address_1: action.response.address_1,
                address_2: action.response.address_2,
                city: action.response.city,
                state: action.response.state,
                zipcode: action.response.zipcode,
                resources: action.response.resources,
            }
        }
        case actionTypes.FETCH_USER_BASIC_INFO_REQUEST_SUCCESS: {
            console.log(action.response)
            console.log(action.response.user.resources)
            return{
                ...state,
                thumbnails: action.response.user.resources,
                firstName: action.response.firstName,
                lastName: action.response.lastName,
                avatar: action.response.avatar,
                address_1: action.response.address_1,
                address_2: action.response.address_2,
                city: action.response.city,
                state: action.response.state,
                zipcode: action.response.zipcode,
                resources: action.response.resources,
            }
        }
        case actionTypes.LOGOUT_USER_REQUEST_SUCCESS: {
            return{
                ...state,
                ...initialState
            }
        }
        default: {
            return state;
        }
    }
}