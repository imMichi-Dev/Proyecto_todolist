import Task from './Task'

const ContainerTask = ({ tasks, setTasks, deleteTask }) => {
  return (
    <section>
      {tasks.map((tsk) => 
        <Task
          key={tsk.id}
          id={tsk.id} 
          title={tsk.title}
          done={tsk.done}
          setTasks={setTasks}
          deleteTask={deleteTask}
        />
      )}
    </section>
  )
}

export default ContainerTask
