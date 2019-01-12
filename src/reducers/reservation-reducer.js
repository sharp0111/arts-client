import * as actionTypes from '../actions/index.actions';

const initialState = {
    active: [],
    pending: [],
    new: null,
}

export default function reservation(state=initialState, action){
    switch(action.type){
        case actionTypes.CREATE_RESERVATION_REQUEST_SUCCESS: {
            console.log(action.response.reservation)
            return{
                ...state,
                new: action.response.reservation, 
            }
        }
        case actionTypes.FETCH_USER_BASIC_INFO_REQUEST_SUCCESS: {
            const pendingRes = []
            const activeRes = []
            console.log(action.response.user.reservations)
            for(let i=0; i<action.response.user.reservations.length; i++){
                if(!action.response.user.reservations[i].booked){
                    console.log('pending')
                    pendingRes.push(action.response.user.reservations[i])
                }
                else{
                    activeRes.push(action.response.user.reservations[i])
                }
            }
            return{
                ...state,
                active: activeRes,
                pending: pendingRes,
            }
        }
        default: {
            return state;
        }
    }
}