import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {reducer as reduxFormReducer} from 'redux-form';
import resourceReducer from './resource-reducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    form: reduxFormReducer,
    resources: resourceReducer,
})