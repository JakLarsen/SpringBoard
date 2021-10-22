import React, {useState} from 'react';






const Todo = ({id, desc, completed=false, removeTodo}) => {


    return(
        <div>
            <h4>{desc}</h4>
            <h4>Completed: {completed}</h4>
            <button onClick={()=>removeTodo(id)}>X</button>
        </div>
    )
}

export default Todo