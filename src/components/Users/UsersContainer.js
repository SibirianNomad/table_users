import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import * as axios from "axios";

class UsersContainer extends React.Component{
    componentDidMount() {
        axios.get('http://localhost:3001/persons').then(resp=>{
            console.log(resp)
        })

    }
    render() {
        return <Users {...this.props}/>
    }
}

let mapStateToProps=(state)=>{
    return {
        usersData:state
    }
}

let UserContainer=connect(mapStateToProps)(UsersContainer);

export default UserContainer;