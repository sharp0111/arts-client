import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {reducer as reduxFormReducer} from 'redux-form';
import resourceReducer from './resource-reducer';
import userReducer from './user-reducer';

//connected-react-router v.5
/*export default (history) => combineReducers({
    router: connectRouter(history),
    form: reduxFormReducer,
    resources: resourceReducer,
    user: userReducer,
})*/

const rootReducer = combineReducers({
    user: userReducer,
    form: reduxFormReducer,
    resources: resourceReducer,
});
  
  export default rootReducer;