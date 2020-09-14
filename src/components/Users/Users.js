import React from 'react';
import classes from './user.module.css';
import img from './../../img/profile.jpg'
import edit from './../../img/edit.svg'
import deleteElem from '../../img/deleteElem.svg'

const Users=(props)=>{
    return(
        <div className={classes.container}>
            <table>
                <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {props.users.map(u=>{
                   return <tr key={u.id}>
                        <td><img className={classes.profile} src={img}/>{u.firstName}</td>
                        <td>{u.lastName}</td>
                        <td><img  className={classes.edit} src={edit}/><img  onClick={()=>{props.deleteUser(u.id)}} className={classes.delete} src={deleteElem}/></td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    );
}
export default Users;