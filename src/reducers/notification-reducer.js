import * as actionTypes from '../actions/index.actions';

const initialState = {
    reservations: [],
    new: null,

}

export default function notification(state=initialState, action){
    switch(action.type){
        case actionTypes.CREATE_RESERVATION_REQUEST_SUCCESS: {
            console.log(action.response.reservation)
            return{
                ...state,
                new: action.response.reservation, 
            }
        }
        default: {
            return state;
        }
    }
}