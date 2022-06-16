import { useState } from 'react'
import Header from './Header'
import Form from './Form'
import styles from './styles.module.css'
import TaskContainer from './TaskContainer'


function App() {

const todos = [
  {
    text: 'Хорошо поспать',
    fav: false
  },
  {
    text: 'Хорошо пожрать',
    fav: false
  },
  {
    text: 'И мое самое любимое...',
    fav: false
  },
]
const [todo, setTodo] = useState(todos)
const [text, setText] = useState('')

const handleRemove = (i) => {
  setTodo(todo.filter((task, index)=>{
    if (index === i){
      return false
    } 
    
      return true
     
  }))
}

const makeFav = (i) => {
  setTodo(todo.map((item, index)=>{
    if(i === index){
      return {
        ...item,
        fav:!item.fav
      }
    }
    return item
  }))
}


const addToDo = () =>{
  if (text !== '')
  setTodo([...todo,{
  text: text,
  fav: false}
])
setText('')
}
  return (
   <div className={styles.app}>
    <Header />
    <Form text={text} setText={setText} addToDo={addToDo}/>
    <TaskContainer todo={todo} makeFav={makeFav} handleRemove={handleRemove}/>
   </div>
 
  );
}

export default App;
