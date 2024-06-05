import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value} placeholder='what is the task today' onChange={(e) => setValue(e.target.value)} />
        <button type='submit' className='todo-btn'>Add task</button>
    </form>
  )
}

export default TodoForm
