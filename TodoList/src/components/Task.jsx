import React from 'react'

const Task = ({ id, title, done, setTasks, deleteTask }) => {
  return (
    <div>
      <h3 className={ done ? 'bg-primary' : 'bg-info'}>{title}</h3>
      <button onClick={() => deleteTask(id)}>Delete</button>
    </div>
  )
}

export default Task
