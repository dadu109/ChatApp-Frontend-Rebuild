import messageReducer from './message';
import loginReducer from './login';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    messages:messageReducer,
    logged:loginReducer,
})

export default rootReducer;
