import React from "react";
import classes from "./user.module.css";
import img from "./../../img/profile.jpg";
import edit from "./../../img/edit.jpg";
import deleteElem from "../../img/deleteElem.jpg";
import {PopupboxContainer} from "react-popupbox";
import {ToastContainer} from "react-toastify";

const Users = (props) => {
  return (
    <div className={classes.container}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((u) => {
            return (
              <tr key={u.id}>
                <td>
                 <img className={classes.profile} src={img} alt={'Сотрудник'} />
                </td>
                <td>{u.firstName}</td>
                <td>{u.lastName}</td>
                <td>
                  <img
                    onClick={() => {
                      props.popupOpen(u.id, true);
                    }}
                    className={classes.edit}
                    src={edit}
                    alt={'Редактировать'}
                  />
                  <img
                    onClick={() => {
                      props.deleteUser(u.id);
                    }}
                    className={classes.delete}
                    src={deleteElem}
                    alt={'Удалить'}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className={classes.button_add} onClick={props.popupOpen}>
        Добавить сотрудника
      </button>
      <PopupboxContainer />
      <ToastContainer />
    </div>
  );
};
export default Users;
