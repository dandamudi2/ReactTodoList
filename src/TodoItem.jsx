import React from 'react';
import FlipMove from 'react-flip-move';

const ToDoItem = ({item,index,status,onDelete,onUpdate,onUpdateRecord}) => {

    function handleCompleteClick(){

        onUpdate(index);
    }

    function handleDeleteRecord(){

        onDelete(index)
       
    }

    function handleUpdateRecord(){
        onUpdateRecord(index)

    }
  return (
    <FlipMove>
    <div className="list-item">
      
      <div className={status === true?'todoitem stackthrough' :'todoitem'}>{item}</div>
      <div>
         <button type="button" className="btn" onClick={handleDeleteRecord} >Delete</button>
      </div>
      <div>
      <button type="button" onClick={handleUpdateRecord} className='btn btnUpdate'>Update</button>
      </div>
      <div>
        <button type="button" className={status === true?'btnCompleted':'btn'} onClick={handleCompleteClick}>Completed</button>
      </div>
    </div>
    </FlipMove>
  )
}

export default ToDoItem
