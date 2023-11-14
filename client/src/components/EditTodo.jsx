import React, { useState } from 'react'
import axios from 'axios'

const EditTodo = () => {
    
    const [editedTitle, setEditedTitle] = useState('');
    const [editedDetail, setEditedDetail] = useState('');
    const updateData = async (id) => {
        try {
            await axios.put(`http://localhost:3000/todo/${id}`, {title: editedTitle, detail: editedDetail})
            handleCancelEdit()
        } catch (err) {
            console.error('Error executing update todo query', err)
        }
    }

    return (
        <>
        </>
    )
}

export default EditTodo;