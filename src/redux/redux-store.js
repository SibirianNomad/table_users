import {combineReducers, createStore,applyMiddleware} from "redux";
import usersReducer from './users-reduser.js'
import {reducer as formReducer} from 'redux-form';
import thunk  from "redux-thunk";

let reducers=combineReducers({
    usersData:usersReducer,
    form:formReducer
});

let store=createStore(reducers,applyMiddleware(thunk));

export default store;
