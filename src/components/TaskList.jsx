import TaskCard from './TaskCard'
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskList() {
  const { tasks } = useContext(TaskContext)

    if (tasks.length === 0) {
      return <h1 className='text-white text-4xl font-bold font-mono text-center'>No hay tareas aún</h1>
    }

  return (
    <div className='grid grid-cols-4 gap-2 mt-10'>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}/>
      ))}
      </div>
  );
}

export default TaskList



