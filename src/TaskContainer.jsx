import React from 'react';
import styles from './styles.module.css'

const TaskContainer = (props) => {
    return (
        <div className={styles.tasksContainer}>
      {props.todo.map((task, index)=>{
  let taskFav = task.fav ? styles.task__selected : styles.task

  return(
    <div className={taskFav}>
      <div className={styles.favs}> <button onClick={()=> props.makeFav(index)}>★</button> </div>
      <div className={styles.taskText}>{task.text}</div>
      <div className={styles.actions}><button onClick={()=> props.handleRemove(index)}>×</button></div>
    </div>
    
  )
})}
    </div>
    );
};

export default TaskContainer;