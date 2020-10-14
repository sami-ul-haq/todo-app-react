import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';

const ToDoLists = (props) => {

    return(
        <>
        <div className="todo-list-style">
            <CancelIcon className="fa-times" onClick={()=>{
                props.onSelect(props.id);
            }} />
            <li>{props.toDoItem}</li>
        </div>
        </>
      )
}

export default ToDoLists;