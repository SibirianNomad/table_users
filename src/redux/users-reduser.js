
let initialState={
    "posts": [
        { "id": 1, "title": "lowdb is awesome"}
    ],
    "user": {
        "name": "typicode"
    },
    "count": 1
};
let usersReducer=(state=initialState,action)=>{
    return state;
}
export default usersReducer;