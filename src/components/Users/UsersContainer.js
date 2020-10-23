import React from 'react';
import Users from "./Users.js";
import {connect} from "react-redux";
import {getUsers,addUser,deleteUser,editUser} from './../../redux/users-reduser';
import {PopupboxManager} from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css"
import Popup from './../Popup/Popup';
import {reduxForm} from "redux-form";

class UsersContainer extends React.Component{
    componentDidMount() {
       this.props.getUsers();
    }

    openPopupbox=(data,editFlag=false)=>{
        if(editFlag){
            let UsersReduxForm=MakeUsersReduxForm(data,true);
            var content=<UsersReduxForm onSubmit={this.props.editUser}/>
        }else{
            let UsersReduxForm=MakeUsersReduxForm(data);
            var content=<UsersReduxForm onSubmit={this.props.addUser}/>
        }
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

const MakeUsersReduxForm=(data,editFlag=false)=>{
    if(editFlag){
        var option={
            form:'users',
            initialValues: {id:data.id, firstName:data.firstName, lastName: data.lastName },
            title:'Редактирование сотрудника'
             }
    }else{
        var option={
            form:'users',
            title:'Дабавление сотрудника'
        }
    }
   return  reduxForm(option)(Popup);
}

let mapStateToProps=(state)=>{
    return {
        usersData:state.usersData.users
    }
}

let UserContainer=connect(mapStateToProps,{getUsers,addUser,deleteUser,editUser})(UsersContainer);

export default UserContainer;