import React from 'react';
import Users from "./Users.js";
import {connect} from "react-redux";
<<<<<<< HEAD
import {setUsers} from './../../redux/users-reduser';
import {userAPI} from './../../api/api';


class UsersContainer extends React.Component{
    componentDidMount() {
        var users=userAPI.getUsers();
        this.props.setUsers(users);
=======
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
>>>>>>> 56815a6aa81298864db5323ccf2a6f331c2cb785
    }
    
    render() {
        return <Users
            users={this.props.usersData}
<<<<<<< HEAD
=======
            deleteUser={this.props.deleteUser}
            popupOpen={this.openPopupbox}
>>>>>>> 56815a6aa81298864db5323ccf2a6f331c2cb785
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