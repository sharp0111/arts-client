import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {reducer as reduxFormReducer} from 'redux-form';

export default (history) => combineReducers({
    router: connectRouter(history),
    reduxFormReducer,
})