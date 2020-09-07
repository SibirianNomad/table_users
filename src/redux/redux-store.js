import {combineReducers, createStore} from "redux";
import usersReducer from './users-reduser'

let reducers=combineReducers({
    usersData:usersReducer
});

let store=createStore(reducers);
console.log(store)
export default store;
