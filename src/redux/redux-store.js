import {combineReducers, createStore} from "redux";
import usersReducer from './users-reduser.js'
import {reducer as formReducer} from 'redux-form';

let reducers=combineReducers({
    usersData:usersReducer,
    form:formReducer
});

let store=createStore(reducers);

export default store;
