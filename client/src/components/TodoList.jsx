import React, {useState, useEffect} from 'react';
import axios from 'axios';

const TodoList = () => {
    const [todo, setTodo] = useState([]);
    const getData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/todo')
            setTodo(response.data);
        } catch (err) {
            console.error('Error executing get todo query', err)
        }
    }

    useEffect(() => {
        getData()
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