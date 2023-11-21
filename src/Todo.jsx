import React from 'react'
import { MdOutlineEditCalendar } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

const Todo = ({task, onToggle, onDelete, onEdit}) => {
  return (
    <div className='px-2 flex justify-between items-center text-white w-[300px] h-10 border border-black bg-violet-600'>
      
         <p onClick={()=> {onToggle(task.id)}} className={` cursor-pointer ${task.completed ? 'text-red-500' : 'text-white'}`} >{task.text}</p>
           <div className='flex gap-2'> 
           <MdOutlineEditCalendar onClick={()=>{onEdit(task.id)}}/>
            <AiOutlineDelete onClick={()=>{onDelete(task.id)}} />
           </div>
       
    </div>
  ) 
}

export default Todo
