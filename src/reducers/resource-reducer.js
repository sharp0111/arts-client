import * as actionTypes from '../actions/index.actions';

const initialState = {
    thumbnails: null,
    selection: null,
    images: [],
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
        case actionTypes.CREATE_RESOURCE_REQUEST_SUCCESS: {
            return{
                ...state,
                selection: action.response,
                images: initialState.images,
            }
        }
        case actionTypes.FETCH_RESOURCE_SUCCESS: {
            return{
                ...state,
                selection: action.response
            }
        }
        case actionTypes.HANDLE_UPLOADED_IMAGE: {
            return{
                ...state,
                images: action.image
            }
        }
        case actionTypes.FETCH_USER_BASIC_INFO_REQUEST_SUCCESS: {
            return{
                ...state,
                thumbnails: action.response.user.resources,
            }
        }
        default: {
            return state;
        }
    }
}