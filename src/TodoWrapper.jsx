import React from 'react'

const TodoWrapper = ({children}) => {
  return (
    <div className=' shadow-md bg-slate-800 mt-20 w-[500px] h-[300px] flex flex-col justify-center items-center gap-10   '>
        {children}
    </div>
   
  )
}

export default TodoWrapper
