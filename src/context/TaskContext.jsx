import {createContext, useState, useEffect} from 'react'
import { tasks as data } from '../data/tasks';

export const TaskContext = createContext()

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description: task.description,
    }])    // (...tasks) "es copiar todos los arreglos de tasks", ( ,task) significa "y agrega esto en un nuevo arreglo"
    
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId)) 
    //Comparar si es distinto la tarea real a la tarea que se le esta pasando.
    //Se eliminaría los similares y se quedarian los diferentes.
  }

  useEffect(() => {      
    setTasks(data)    
  }, [])

  return (
    <TaskContext.Provider value={{
      createTask, 
      deleteTask,
      tasks
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}



