import React from 'react'
import TodoItem  from './TodoItem';


const TodoList = ({todos,onDelete,onUpdate,onUpdateRecord}) => {


    
   const renderedItems = todos.map((todo,idx) =>{

      
             return <TodoItem  item={todo.title} key={idx} index={idx} status={todo.status}  onDelete={onDelete} onUpdate={onUpdate} onUpdateRecord={onUpdateRecord} />
            });
    

   
  return (
    <div className="list" >
       
    {renderedItems}
    
    </div>
  )
}

export default TodoList
