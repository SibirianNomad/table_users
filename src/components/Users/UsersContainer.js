import React from "react";
import Users from "./Users.js";
import {connect} from "react-redux";
import {getUsers, addUser, deleteUser, editUser, getUser,} from "./../../redux/users-reduser";
import {PopupboxManager} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
import PopupContainer from "../Popup/PopupContainer";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  openPopupbox = (id, editFlag = false) => {
    if (editFlag) {
      this.props.getUser(id).then((data) => {
        var content = (
          <PopupContainer
            submitFunction={this.props.editUser}
            data={data}
            title='Редактирование сотрудника'
          />
        );
        PopupboxManager.open({content});
      });
    } else {
      var content = (
        <PopupContainer
          submitFunction={this.props.addUser}
          data={{firstName: "", lastName: ""}}
          title='Дабавление сотрудника'
        />
      );
      PopupboxManager.open({content});
    }
  };

  render() {
    return (
      <Users
        users={this.props.usersData}
        deleteUser={this.props.deleteUser}
        popupOpen={this.openPopupbox}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    usersData: state.usersData.users,
  };
};

let UserContainer = connect(mapStateToProps, {getUsers, addUser, deleteUser, editUser, getUser,})(UsersContainer);

export default UserContainer;
