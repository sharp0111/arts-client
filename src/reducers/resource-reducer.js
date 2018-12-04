import * as actionTypes from '../actions/index.actions';

const initialState = {
    thumbnails: null,
    selection: null,
}

export default function resource(state=initialState, action){
    switch(action.type){
        case actionTypes.FETCH_SEARCH_RESULTS_SUCCESS: {
            return {
                ...state, 
                thumbnails: action.response
            }
        }
        case actionTypes.FETCH_CATEGORY_RESULTS_SUCCESS: {
            return {
                ...state,
                thumbnails: action.response
            }
        }
        default: {
            return state;
        }
    }
}