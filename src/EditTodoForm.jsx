import React, {useState} from 'react'

const EditTodoForm = ({editTask, task}) => {
    const [inputValue, setInputValue] = useState('')

   
  return (
    <>
    <input type="text" value={inputValue} placeholder='Update Task' className='text-white bg-transparent py-1 px-1 ring-offset-0 border border-violet-500' onChange={(e)=>{setInputValue(e.target.value)}}/>
    <button onClick={()=>{editTask(inputValue, task.id)}} className=' bg-violet-600 py-[5px] px-2 text-white'>Update Task</button>
    </>
   
  )
}

export default EditTodoForm
