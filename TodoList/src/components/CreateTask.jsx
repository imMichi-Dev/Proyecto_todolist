import React from 'react'

const CreateTask = ({ addTask }) => {
  connst [tittleTask, setTitleTask] = useState('')

  function addNewTask(e){
    e.preventDefault()
    addTask(tittleTask)
  }

  return (
    <div>
    <form onSubmit={addNewTask}>
     <input type="text" placeholder='Task Title' value={tittleTask} onChange={(e) => setTitleTask(e.target.value)} />
     <button type='button' onClick={addTask}>Add Task</button>
    </form>    
    </div>
  )
}

export default CreateTask
