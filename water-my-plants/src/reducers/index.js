import { combineReducers } from 'redux';
import plantsReducer from './plantsReducer';


const rootReducer = combineReducers({
    plantsReducer,
    // userReducer,
    // notifReducer,
    // scheduleReducer
})

export default rootReducer;