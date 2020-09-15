import React from 'react';
import Popup from 'reactjs-popup';
import classes from './popup.module.css';

export default () => (
    <Popup trigger={<button className={classes.button_add}> Добавить сотрудника</button>}>
      {close => (
      <div>
        Content here
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
    </Popup>
  );