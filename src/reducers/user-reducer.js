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
    email: null,
    phone: null,
    resources: [],
}

export default function user(state=initialState, action){
    switch(action.type){
        case actionTypes.FETCH_USER_LOGIN_REQUEST_SUCCESS: {
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
            return{
                ...state,
                thumbnails: action.response.user.resources,
                firstName: action.response.user.firstName,
                lastName: action.response.user.lastName,
                avatar: action.response.user.avatar,
                address_1: action.response.user.address_1,
                address_2: action.response.user.address_2,
                city: action.response.user.city,
                state: action.response.user.state,
                zipcode: action.response.user.zipcode,
                resources: action.response.user.resources,
                email: action.response.user.email,
                phone: action.response.user.phone,
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