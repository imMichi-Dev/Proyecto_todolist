import { useState } from "react"
import ContainerTask from "./components/ContainerTask"
import CreateTask from "./components/CreateTask"
import FilterTask from "./components/FilterTask"
import Header from "./components/Header"  



function App() {

  const [tasks, setTask] = useState(JSON.parse(localStorage.getItem('tasks')) || [])

  function deleteTask(id) {
    const taskFilter = tasks.filter((task) => task.id !== id)
    localStorage.setItem('tasks', JSON.stringify(taskFilter))
    setTask(taskFilter)
  }

  function addTask(title){
    const newTask = { id: crypto.randomUUID(), title: title, done: false }
    const newArray = [...tasks, newTask]
    localStorage.setItem('tasks', JSON.stringify(newArray))
    setTask(newArray)
  }

  function filterTask(optionSelect){
    const allTasks = JSON.parse(localStorage.getItem('tasks'))
    if (optionSelect === 'all') {
      setTask(allTasks)
      
    }else{
      const filteredTasks = allTasks.filter(task => String(task.done) === optionSelect)
      setTask(filteredTasks)
    }

  }

  function modifyTask(id){
    const allTasks = JSON.parse(localStorage.getItem('tasks'))
    const allTasksModified = allTasks.map(elem => {
      if (elem.id === id) {
        return { 
          ...elem, 
          done: !elem.done };
      }
      return elem;
    })
    localStorage.setItem('tasks', JSON.stringify(allTasksModified))
    setTask(allTasksModified) 
  }

  return (
    <>
      <Header />
      <CreateTask addTask={addTask} />
      <FilterTask filterTask={filterTask} />
      <ContainerTask tasks={tasks} deleteTask={deleteTask} modifyTask={modifyTask}/>
    </>
  )
}

export default App
