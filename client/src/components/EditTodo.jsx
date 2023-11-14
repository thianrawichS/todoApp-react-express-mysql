import React, { useState } from 'react'
import axios from 'axios'

const EditTodo = ({handleCancelEdit, currentTitle, currentDetail}) => {
    
    const [editedTitle, setEditedTitle] = useState(currentTitle);
    const [editedDetail, setEditedDetail] = useState(currentDetail);
    const updateData = async (id) => {
        try {
            await axios.put(`http://localhost:3000/todo/${id}`, {title: editedTitle, detail: editedDetail})
            handleCancelEdit
        } catch (err) {
            console.error('Error executing update todo query', err)
        }
    }
    

    return (
        <div>
            <input type="text"
                value={editedTitle} 
                onChange={(e) => setEditedTitle(e.target.value)}
             />
            
            
            <button> Save </button>
            <button onClick={() => handleCancelEdit}> Cancel </button>
        </div>
    )
}

export default EditTodo;