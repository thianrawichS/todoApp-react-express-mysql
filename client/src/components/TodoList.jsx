import React, {useState, useEffect} from 'react';
import axios from 'axios';

const TodoList = () => {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/todo')
            .then((response) => {
                setTodo(response.data)
                console.log(response)
            })
            .catch((err) => {
                console.error('Error getting todo data', err)
            })
    }, [todo]);

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todo.map((item) => (
                    <li key={item.id}>
                        {item.title} - {item.detail}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;