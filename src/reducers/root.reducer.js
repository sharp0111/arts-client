import {combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import resourceReducer from './resource-reducer';
import userReducer from './user-reducer';
import reservationReducer from './reservation-reducer'

const rootReducer = combineReducers({
    user: userReducer,
    form: reduxFormReducer,
    resources: resourceReducer,
    reservations: reservationReducer,
});
  
  export default rootReducer;