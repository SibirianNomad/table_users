import React from 'react';
import classes from "../Users/user.module.css";
import {PopupboxManager} from 'react-popupbox';
import {Field,reduxForm} from "redux-form";
import {required} from "../../validators/validator";
import {Input} from './../FormsControls/FormsControls';

let Popup=(props)=>{
  return(
      <div>
          <form onSubmit={props.handleSubmit}>
              <h2 className={classes.title}>{props.title}</h2>
              <a className={classes.backLink} onClick={PopupboxManager.close}>Назад к списку</a>
              <div className={classes.string}>
                  <Field validate={[required]} component={Input} name={'firstName'}  className={classes.field} placeholder={'Введите имя сотрудника'}/>
              </div>
              <div className={classes.string}>
                  <Field validate={[required]} component={Input} name={'lastName'}  className={classes.field} placeholder={'Введите фамилию сотрудника'}/>
              </div>
              <button className={`${classes.buttonSave} ${classes.button_add}`}>Сохранить</button>
          </form>
      </div>
      )
}


export default Popup;