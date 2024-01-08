import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';


function TaskForm() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const { createTask } = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({
            title,
            description
        });
        setTitle("")
        setDescription("")
    };
    

  return (
    <div className='max-w-md mx-auto'>
        <form onSubmit={handleSubmit} className='bg-gray-800 p-10 mb-4 rounded-sm'>
        <h1 className='text-3xl text-center font-mono font-bold text-white mb-3'>Crea tu tarea</h1>
        
        { <input placeholder='Escribe tu tarea'
        onChange={(e) => {
            setTitle(e.target.value)
        }} 
        value={title} autoFocus
        maxLength={20}
        className='bg-slate-300 p-3 w-full mb-2 rounded-sm'/> }
      

        { <textarea placeholder='Escribe la descripcion de esta tarea' 
        onChange={(e) => {
            setDescription(e.target.value)
        }} value={description}
        maxLength={40}
        className='bg-slate-300 p-3 w-full mb-2 rounded-sm'></textarea> }

        <button><Button variant="contained" color='success'>Guardar</Button></button>
        

        </form>
    </div>
  )
}

export default TaskForm
