import React from 'react';
import Users from "./Users.js";
import {connect} from "react-redux";
import {getUsers,addUser,deleteUser} from './../../redux/users-reduser';
import {PopupboxManager} from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css"
import Popup from './../Popup/Popup';
import {reduxForm} from "redux-form";

class UsersContainer extends React.Component{
    componentDidMount() {
       this.props.getUsers();
    }

    openPopupbox=(data)=>{
        debugger
        let content=<UsersReduxForm onSubmit={this.props.addUser}/>
        PopupboxManager.open({ content })
    }

    render() {
        return <Users
            users={this.props.usersData}
            deleteUser={this.props.deleteUser}
            popupOpen={this.openPopupbox}
        />
    }
}
const UsersReduxForm=reduxForm({form:'users'})(Popup);

let mapStateToProps=(state)=>{
    return {
        usersData:state.usersData.users
    }
}

let UserContainer=connect(mapStateToProps,{getUsers,addUser,deleteUser})(UsersContainer);

export default UserContainer;