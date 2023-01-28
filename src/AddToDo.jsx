import React, { useState} from 'react';
import TodoList  from './ToDoList';

function AddToDo(){

   
    const [todoItem,setToDoItem] =useState([]);
    const [item,setItem] =useState('');


    const [buttonText,setButtonText] =useState('Add To Do');


    const [itemId,setItemId] = useState(-1);


     function handleCompleteClick(id){

      

        const updatedToDos = todoItem.map((item,idx) =>{

                if(idx === id){
                    return {...item,status:true}
                }
                return item;

        });

        setToDoItem(updatedToDos);

        console.log(updatedToDos);
     }

   
      function handleClick(e){

           e.preventDefault();
           if(itemId < 0) {
           setToDoItem([...todoItem,
            {title:item.toUpperCase(),status:false}]);
        }
        else if(itemId >=0 ){

            const updatedToDos = todoItem.map((todo,idx) =>{

                if(itemId === idx){
                   
                    return {...todo,title:item}
                }
                return todo;

            }
                
            
                

        
        
        
        
        
        )
        console.log(updatedToDos);

        setButtonText('Add To Do');
                setItemId(-1);

               setToDoItem(updatedToDos);
                setItem('');


           

        }
            
           
            setItem('')
        
          
      }

      function handleDeleteClick(id){

       const updatedTodos= todoItem.filter((item,index) =>{
        return   id!==index;
       })

          setToDoItem(updatedTodos);

        
      }

      function handleUpdateClick(id){

        setButtonText('Update To Do');
        setItemId(id);
      
        todoItem.map((item,idx) =>{
        
            if(idx === id){
           
                setItem(item.title);
                
            }
            return item;

    });
     setButtonText('Update To Do');
  
   

      }

      

    return(
        <div  className='todoContainer'>
            <form onSubmit={handleClick}>

        
           <input type="text" onChange={e=>setItem(e.target.value)}  value={item} />
           
           <button className='btnAddToDo' type="submit">{buttonText}</button>

          
           
          
           <div >
            <TodoList todos={todoItem} onDelete={handleDeleteClick} onUpdate = {handleCompleteClick} onUpdateRecord={handleUpdateClick} />
           </div>
   
           </form>
        </div>
        
    )
}

export default AddToDo;