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

export const setUsers=(users)=>({type:SET_USERS_TABLE,users:users});
export default usersReducer;