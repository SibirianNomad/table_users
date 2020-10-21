import React from 'react';
import classes from "../Users/user.module.css";
import {PopupboxManager} from 'react-popupbox';
import {Field,reduxForm} from "redux-form";

let Popup=(props)=>{
    const content=(
        <div>
            <h2 className={classes.title}>Создание сотрудника</h2>
            <form onSubmit={props.handleSubmit}>
                <a className={classes.backLink} onClick={PopupboxManager.close}>Назад к списку</a>
                <p><Field  component={'input'} name={'name'}  className={classes.field} placeholder={'Введите имя сотрудника'}/>
                </p>
                <p>
                    <Field component={'input'} name={'surname'}  className={classes.field} placeholder={'Введите фамилию сотрудника'}/>
                </p>
                <button className={`${classes.buttonSave} ${classes.button_add}`}>Сохранить</button>
            </form>
        </div>
    )
    return content;
}


export default Popup;