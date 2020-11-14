import React from 'react';
import classes from './formsControls.module.css';


export const Input=({ input,meta,...props })=>{
    let hasError=meta.error && meta.touched;
    return(
        <div className={ hasError ? classes.error:''}>
            <input {...input} {...props}/>
        </div>
    )
}