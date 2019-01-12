import * as actionTypes from '../actions/index.actions';

const initialState = {
    reservation: null,
}

export default function notification(state=initialState, action){
    switch(action.type){
        case actionTypes.CREATE_RESERVATION_REQUEST_SUCCESS: {
            console.log(action.response)
            return{
                ...state,
                reservation: [...state.reservation, action.response] 
            }
        }
        default: {
            return state;
        }
    }
}