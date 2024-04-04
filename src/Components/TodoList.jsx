import React, { useState } from 'react'
import { Form } from './Form'
import {v4 as uuidv4} from 'uuid'
import Todo from './Todo';
import { Edit } from './Edit';
uuidv4()
function TodoList() {
    
    const [todoValue, setTodoValue] = useState([]);
    const createTodo=(todo)=>{
      
        setTodoValue([...todoValue,{id: uuidv4(),task:todo,isEditing:false}])
    }
    const deleteTodo=(id)=>{
        setTodoValue(todoValue.filter(todo => todo.id !== id))
        console.log("its working");
    }
    const editTodo=(id)=>{
      setTodoValue(todoValue.map(todo => todo.id === id ? {...todo,isEditing:!todo.isEditing}: todo))
      console.log("its working");
    }

    const editTask=(task,id)=>{
      setTodoValue(todoValue.map(todo => todo.id === id ? {...todo,task, isEditing: !todo.isEditing} : todo))
    }
  return (
    <div className='container bg-gray-400 mt-20 p-8 rounded-xl'>
       <Form createTodo={createTodo}/>
       {
        todoValue.map((todo,idx)=>(
            todo.isEditing ?(
              <Edit editTodo={editTask} task={todo} key={idx}/>
            ):(<Todo 
              id={todo.id} 
              task={todo.task} 
              isEditing={todo.isEditing} 
              key={idx} 
              deleteTodo={deleteTodo} 
              editTodo={editTodo}/>)
            
            

        ))
       }
    </div>
  )
}

export default TodoList