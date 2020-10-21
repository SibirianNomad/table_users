import React from 'react';
import Users from "./Users.js";
import {connect} from "react-redux";
import {setUsers} from './../../redux/users-reduser';
import * as axios from "axios";
import {PopupboxManager} from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css"
import classes from './user.module.css';
import Popup from './../Popup/Popup';
import {reduxForm} from "redux-form";

class UsersContainer extends React.Component{
    componentDidMount() {
        axios.get('http://localhost:3001/persons')
            .then(response=>{
                this.props.setUsers(response.data);
            })
    }
    deleteUser=(id)=>{
        axios.delete('http://localhost:3001/persons/'+id)
            .then(response=>{
                if(response.status===200){
                    axios.get('http://localhost:3001/persons')
                        .then(response=>{
                            this.props.setUsers(response.data);
                        })
                }
            })
    }
    addUser=(firstName,lastName)=>{
        axios.post('http://localhost:3001/persons',{
            firstName:firstName,
            lastName:lastName
        }).then(response=>{
            this.props.setUsers(response.data);
            })

    }
    editUser=(id,firstName,lastName)=>{
        axios.put('http://localhost:3001/persons'+id,{
            firstName:firstName,
            lastName:lastName
        }).then(response=>{
            this.props.setUsers(response.data);
        })
    }
    openPopupbox() {
        let onSubmit=(formData)=>{
            console.log(formData)
        }
        let content=<UsersReduxForm onSubmit={onSubmit}/>
        PopupboxManager.open({ content })
    }
    render() {
        return <Users
            users={this.props.usersData}
            deleteUser={this.deleteUser}
            addUser={this.addUser}
            editUser={this.editUser}
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

let UserContainer=connect(mapStateToProps,{setUsers})(UsersContainer);

export default UserContainer;