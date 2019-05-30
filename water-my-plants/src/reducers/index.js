import { combineReducers } from 'redux';
import userReducer from './userReducer';
import notifReducer from './notifReducer';
import plantsReducer from './plantsReducer';
import scheduleReducer from './scheduleReducer';


const rootReducer = combineReducers({
    plantsReducer,
    userReducer,
    notifReducer,
    scheduleReducer
})

export default rootReducer;