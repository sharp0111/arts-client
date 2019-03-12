import {combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import resourceReducer from './resource-reducer';
import userReducer from './user-reducer';
import reservationReducer from './reservation-reducer';
import appStateReducer from './appState.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    form: reduxFormReducer,
    resources: resourceReducer,
    reservations: reservationReducer,
    appState: appStateReducer,
});
  
  export default rootReducer;