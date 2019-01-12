import config from '../config'
import {push} from 'connected-react-router';

export const CREATE_RESERVATION_REQUEST_TRIGGERED = 'CREATE_RESERVATION_REQUEST_TRIGGERED';
export const CREATE_RESERVATION_REQUEST_SUCCESS = 'CREATE_RESERVATION_REQUEST_SUCCESS';
export const CREATE_RESERVATION_REQUEST_FAILURE = 'CREATE_RESERVATION_REQUEST_FAILURE';

export function createReservation(data){
    const promise = fetch(`${config.API_BASE_URL}/reservation`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            data: data,
        })
    });
    return{
        onRequest: CREATE_RESERVATION_REQUEST_TRIGGERED,
        onSuccess: CREATE_RESERVATION_REQUEST_SUCCESS,
        onFailure: CREATE_RESERVATION_REQUEST_FAILURE,
        promise,
    }
}