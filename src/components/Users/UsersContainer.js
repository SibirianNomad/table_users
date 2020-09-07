import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";

let mapStateToProps=(state)=>{
    return {
        usersData:state,
    }
}

const UsersContainer=connect(mapStateToProps)(Users);

export default UsersContainer;