import React from 'react';
import styles from './styles.module.css'
const Form = (props) => {
    return (
        <div className={styles.form}>
      <input className={styles.textForm} 
      type='text'
      placeholder= 'Введите текст'
      value={props.text}
      onChange={(e) => props.setText(e.target.value)}
       /> 
      <button className={styles.addBtn} onClick={props.addToDo}>Добавить</button>
    </div>
    );
};

export default Form;