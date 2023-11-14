import React, { useState } from "react";
import axios from 'axios';

const AddTodo = () => {
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');

    const handleAddTodo = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:3000/todo', {title, detail});
            setTitle('');
            setDetail('');
        } catch (err) {
            console.error('Error to create new todo list', err)
        }
    }

    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <div>
                    <label> Title </label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                </div>
                <div>
                    <label> Description </label>
                    <input type="text" value={detail} onChange={(e) => setDetail(e.target.value)} />
                </div>
                <button type="submit"> Add </button>
            </form>
        </div>
    )
}

export default AddTodo;