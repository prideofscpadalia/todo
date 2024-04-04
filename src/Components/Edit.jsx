
import React, { useState } from 'react'

export function Edit({editTodo, task}) {
    
    const [value,setValue] = useState("")
    const handleValue =(e)=>{
        setValue(e.target.value)
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        editTodo(value,task.id);
        console.log(value);
        setValue('')
    }
  return (
    <form className='mb-4 font-primary w-full' onSubmit={handleSubmit}>
        
        <input type="text" className='outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-green-300' placeholder="update task" onChange={handleValue} value={value}/>
        <button className='bg-green-400 border-none p-2 text-white cursor-pointer rounded ml-4'>Add Task</button>
        
    </form>


  )
}


