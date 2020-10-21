import {userAPI} from "../api/api";

const SET_USERS_TABLE='SET-USERS-TABLE';

let initialState={
    users:[]
};
let usersReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_USERS_TABLE:{
            return {...state,users:action.users}
        }

    }
    return state;
}
export const getUsers=()=>{
    return (dispatch)=>{
        userAPI.getUsers().then((data)=>{
            dispatch(setUsers(data));
        });
    }
}
export const addUser=(data)=>{
    return (dispatch)=>{
        userAPI.addUser(data.name,data.surname).then((data)=>{
            if(data.status==201){
                dispatch(getUsers());
            }
        });
    }
}
export const deleteUser=(id)=>{
    return (dispatch)=>{
        userAPI.deleteUser(id).then((data)=>{
            if(data.status==200){
            dispatch(getUsers());
            }
        })
    }
}
export const setUsers=(users)=>({type:SET_USERS_TABLE,users:users});

export default usersReducer;