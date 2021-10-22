import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';






const TodoList = () =>{
    

    const INITIAL_TODOS = [ 
        {
            id: uuid(),
            desc: 'Walk the dog',
            completed: false
        },
        {
            id: uuid(),
            desc: 'Buy snacks for movie night',
            completed: false
        },
        {
            id: uuid(),
            desc: 'Workout',
            completed: false
        }
    ]

    const [todos, setTodos] = useState(INITIAL_TODOS)

    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, {...newTodo}])
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(todo=>todo.id != id))
    }


    return (
        <div>
            {todos.map(todo=>(
                <Todo 
                key={todo.id} 
                id={todo.id} 
                desc={todo.desc} 
                completed={todo.completed}
                removeTodo={removeTodo}
            />
            ))}
            <NewTodoForm addTodo={addTodo}/>
        </div>
    )
}
export default TodoList
