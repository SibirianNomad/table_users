import React from 'react';
import Users from "./Users.js";
import {connect} from "react-redux";
import {setUsers} from './../../redux/users-reduser';
import {userAPI} from './../../api/api';


class UsersContainer extends React.Component{
    componentDidMount() {
        var users=userAPI.getUsers();
        this.props.setUsers(users);
    }
    
    render() {
        return <Users
            users={this.props.usersData}
        />
    }
}

let mapStateToProps=(state)=>{
    return {
        usersData:state.usersData.users
    }
}

let UserContainer=connect(mapStateToProps,{setUsers})(UsersContainer);

export default UserContainer;