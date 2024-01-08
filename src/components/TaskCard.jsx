import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';


function TaskCard({ task}) {

  const { deleteTask } = useContext(TaskContext)
  
  return (
        
   <div className='bg-gray-800 text-white p-4 rounded-md'>
      <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
         <p className='text-gray-500 text-sm'>{task.description}</p>
         <Button variant="contained"
          color='error'
          size='small'
          startIcon={<DeleteIcon />}
          onClick={() => deleteTask(task.id)}>Eliminar tarea</Button>
          {/*Se esta obteniendo el id de la carta clickeada*/}
          {/*  */}
    </div>
        
  )
}

export default TaskCard
