import {combineReducers, createStore} from "redux";
import usersReducer from './users-reduser.js'

let reducers=combineReducers({
    usersData:usersReducer
});

let store=createStore(reducers);

export default store;
