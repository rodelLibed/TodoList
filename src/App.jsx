import { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import TodoWrapper from "./TodoWrapper";
import EditTodoForm from "./EditTodoForm";




export default function App() {
  const [todoList, setTodoList] = useState(initialTask)

let nextId = todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1

  const handleAddTask = (inputValue) =>{
      setTodoList([...todoList, { id:nextId, text: inputValue, 
       completed: false, isEditing: false
      } ])
  }

  const handleToggle = (id) =>{
      setTodoList(todoList.map((task)=>{
        return task.id === id ? {...task, completed: !todoList.completed} : task
      }))
  }

  const handleDelete = (id) =>{
      setTodoList(todoList.filter((task)=> { return task.id !== id  }))
  }

  const handleEdit = (id) =>{
     setTodoList(todoList.map((task)=>{
       return task.id === id ? {...task, 
         isEditing: !todoList.isEditing} : task
     }))
  }

  const handleUpdateTask = (input, id) => {
      setTodoList(todoList.map((todo)=>{
          return todo.id === id ? {...todo, text: input, isEditing: !todo.isEditing} : todo
      }))
  }

   return(
    <div className="bg-violet-900 h-screen w-full flex justify-center ">
      
        <TodoWrapper>
        <h1 className="text-white font-semibold text-xl">Get Things done!</h1> 
         <div>
         <TodoForm addTodo={handleAddTask}  />
         </div>
        <div className=" space-y-2 overflow-y-auto h-auto">{todoList.map((task)=>{
           return(
            <>
              {task.isEditing ?
                (
                  <EditTodoForm editTask={handleUpdateTask} task={task} />
                ) : (
                  <Todo
                  key={task.id} 
                  task={task} 
                  onToggle={handleToggle} 
                  onDelete={handleDelete} 
                  onEdit={handleEdit} />
                )            
              }
           </>
           )
           
        })}</div>
       
        </TodoWrapper>
    
       
    </div>
      

   )
}

const initialTask = [
  {id: 0, text: "Add Your Task", completed: false, isEditing: false}
]