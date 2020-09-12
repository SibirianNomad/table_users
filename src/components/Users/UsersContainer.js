import React from 'react';
import Users from "./Users.js";
import {connect} from "react-redux";
import {setUsers} from './../../redux/users-reduser';
import * as axios from "axios";

class UsersContainer extends React.Component{
    componentDidMount() {
        axios.get('http://localhost:3001/persons')
            .then(response=>{
                this.props.setUsers(response.data);
            })
    }
    render() {
        return <Users users={this.state}/>
    }
}

let mapStateToProps=(state)=>{
    return {
        usersData:state.usersData.users
    }
}

let UserContainer=connect(mapStateToProps,{setUsers})(UsersContainer);

export default UserContainer;