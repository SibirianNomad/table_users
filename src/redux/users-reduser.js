import {USERAPI} from "../api/api";
import "react-toastify/dist/ReactToastify.css";
import Notify from "./../components/Notification/Notofocation";

const SET_USERS_TABLE = "SET-USERS-TABLE";

let initialState = {
  users: [],
};
let usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_TABLE: {
      return {...state, users: action.users};
    }
  }
  return state;
};
export const getUsers = () => {
  return (dispatch) => {
    USERAPI.getUsers().then((data) => {
      if (data.status == 200) {
        dispatch(setUsers(data.data));
      }
      if (data == 404) {
        Notify(404);
      }
    });
  };
};
export const addUser = (data) => {
  return (dispatch) => {
    USERAPI.addUser(data.firstName, data.lastName).then((data) => {
      if (data.status == 201) {
        dispatch(getUsers());
        Notify("added");
      }
      if (data == 404) {
        Notify(404);
      }
    });
  };
};
export const deleteUser = (id) => {
  return (dispatch) => {
    USERAPI.deleteUser(id).then((data) => {
      if (data.status == 200) {
        dispatch(getUsers());
        Notify("deleted");
      }
      if (data == 404) {
        Notify(404);
      }
    });
  };
};
export const editUser = (data) => {
  return (dispatch) => {
    USERAPI.editUser(data.id, data.firstName, data.lastName).then((data) => {
      if (data.status == 200) {
        dispatch(getUsers());
        Notify("edited");
      }
      if (data == 404) {
        Notify(404);
      }
    });
  };
};
export const getUser = (id) => {
  return (dispatch) => {
    return USERAPI.getUser(id).then((data) => {
      if (data.status == 200) {
        return data.data;
      }
      if (data == 404) {
        Notify(404);
      }
    });
  };
};
export const setUsers = (users) => ({type: SET_USERS_TABLE, users: users});

export default usersReducer;
