import config from '../config';

export const FETCH_SEARCH_RESULTS_TRIGGERED = 'FETCH_SEARCH_RESULTS_TRIGGERED';
export const FETCH_SEARCH_RESULTS_SUCCESS = 'FETCH_SEARCH_RESULTS_SUCCESS';
export const FETCH_SEARCH_RESULTS_FAILURE = 'FETCH_SEARCH_RESULTS_FAILRE';

export function getSearchResults(){
    const promise = fetch(`${config.API_BASE_URL}/resources`, {
        method: 'GET',
        headers: {'Content-Type': 'applicaton/json'}
    });
    return {
        onRequest: FETCH_SEARCH_RESULTS_TRIGGERED,
        onSuccess: FETCH_SEARCH_RESULTS_SUCCESS,
        onFailure: FETCH_SEARCH_RESULTS_FAILURE,
        promise,
    };
}

export const CREATE_RESOURCE_REQUEST_TRIGGERED = 'CREATE_GOAL_REQUEST_TRIGGERED';
export const CREATE_RESOURCE_REQUEST_SUCCESS = 'CREATE_RESOURCE_REQUEST_SUCCESS';
export const CREATE_RESOURCE_REQUEST_FAILURE = 'CREATE_RESOURCE_REQUEST_FAILURE';

export function createResource(data){
    const promise = fetch(`${config.API_BASE_URL}/resource`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            data: data,
        })
    });
    return{
        onRequest: CREATE_RESOURCE_REQUEST_TRIGGERED,
        onSuccess: CREATE_RESOURCE_REQUEST_SUCCESS,
        onFailure: CREATE_RESOURCE_REQUEST_FAILURE,
        promise,
    }
}
