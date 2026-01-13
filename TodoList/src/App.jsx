import { useState } from "react"
import ContainerTask from "./components/ContainerTask"
import CreateTask from "./components/CreateTask"
import FilterTask from "./components/FilterTask"
import Header from "./components/Header"  



function App() {

  const [tasks, setTask] = useState(JSON.parse(localStorage.getItem('tasks')) || [])

  function deleteTask(id) {
    const newTasks = tasks.filter((task) => task.id !== id)
    setTask(newTasks)
  }

  function addTask(title){
    const newTask = { id: crypto.randomUUID(), title: title, done: false }
    const newArray = [...tasks, newTask]
    localStorage.setItem('tasks', JSON.stringify(newArray))
    setTask(newArray)
  }

  return (
    <>
      <Header />
      <CreateTask addTask={addTask} />
      <FilterTask />
      <ContainerTask tasks={tasks} deleteTask={deleteTask}/>
    </>
  )
}

export default App
