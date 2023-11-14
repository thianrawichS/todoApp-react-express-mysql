import React, {useState, useEffect} from 'react';
import axios from 'axios';
import EditTodo from './EditTodo';

const TodoList = () => {
    const [todo, setTodo] = useState([]);
    const [editId, setEditId] = useState(null);
    
    const getData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/todo')
            setTodo(response.data);
        } catch (err) {
            console.error('Error executing get todo query', err)
        }
    }
    const deleteData = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/todo/${id}`)
        } catch (err) {
            console.error('Error executing delete todo query', err)
        }
    }
    const handleEditClick = (id) => {
        setEditId(id);
    };
    const handleCancelEdit = () => {
        setEditId(null);
    };

    useEffect(() => {
        getData()
    });

    return (
        
        <div>
            <h2>Todo List</h2>
            <ul>
                {todo.map((item) => (
                    <li key={item.id}>
                        {editId === item.id ? (
                            <TodoList 
                                handleCancelEdit = {handleCancelEdit}
                                currentTitle = {item.title}
                                currentDetail = {item.detail}
                            />
                        ) : (
                            <div>
                                {item.title} - {item.detail}
                                <button onClick={() => handleEditClick(item.id)}>
                                    Edit
                                </button>
                                <button onClick={() => deleteData(item.id)}>Delete</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;