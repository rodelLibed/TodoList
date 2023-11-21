import {useState} from 'react'

export default function TodoForm({addTodo}) {
    const [inputValue, setInputValue] = useState('')
  return (
   
        
        <div className=''>
         <input type="text" placeholder='Add Task' className='text-white bg-transparent py-1 px-1 ring-offset-0 border border-violet-500' onChange={(e)=>{setInputValue(e.target.value)}}/>
         <button onClick={()=> addTodo(inputValue)} className=' bg-violet-600 py-[5px] px-2 text-white'>Add Task</button>
        </div>
    
  )
}
