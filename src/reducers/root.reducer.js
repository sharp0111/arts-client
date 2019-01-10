import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {reducer as reduxFormReducer} from 'redux-form';
import resourceReducer from './resource-reducer';
import userReducer from './user-reducer';

export const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    form: reduxFormReducer,
    resources: resourceReducer,
    user: userReducer,
})