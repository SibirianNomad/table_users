import React from "react";
import classes from "../Users/user.module.css";
import {PopupboxManager} from "react-popupbox";

const Popup = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <h2 className={classes.title}>{props.title}</h2>
        <a
          className={classes.backLink}
          onClick={() => {
            PopupboxManager.close();
          }}
        >
          Назад к списку
        </a>
        <div className={classes.string}>
          <input
            onChange={props.handleChange}
            value={props.firstName}
            name={"firstName"}
            placeholder={"Введите имя сотрудника"}
            className={props.firstNameValid ? classes.error : ""}
          />
        </div>
        <div className={classes.string}>
          <input
            onChange={props.handleChange}
            value={props.lastName}
            name={"lastName"}
            placeholder={"Введите фамилию сотрудника"}
            className={props.lastNameValid ? classes.error : ""}
          />
        </div>
        <button
          onClick={props.handleSubmit}
          className={`${classes.buttonSave} ${classes.button_add}`}
        >
          Сохранить
        </button>
      </form>
    </div>
  );
};

export default Popup;
