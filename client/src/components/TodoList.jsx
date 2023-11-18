import { useState } from 'react'

const TodoList = (props) => {
    const {
        todoList,
        deleteTodoData,
        updateTodoData,
        handleDone
    } = props;

    const [editId, setEditId] = useState('')
    const [editTitle, setEditTitle] = useState('')
    const [editDetail, setEditDetail] = useState('')

    const editClick = (id, title, detail) => {
        setEditId(id)
        setEditTitle(title)
        setEditDetail(detail)
    }
    const cancelEdit = () => {
        setEditId('')
        setEditTitle('')
        setEditTitle('')
    }
    const handleEdit = () => {
        updateTodoData(editId, editTitle, editDetail)
            .then(() => cancelEdit())
            .catch((err) => console.error('Error updating todo', err));
    }
    
    return(
        <div className='container border rounded'>
            <table className='table'>
                <thead>
                    <tr>
                        <th></th>
                        <th> Title </th>
                        <th> Detail </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {todoList.map((todo) => (
                    <tr key={todo.id}>
                        {editId == todo.id ? (
                            <>
                                <td></td>
                                <td> 
                                    <input 
                                        type="text" 
                                        value={editTitle} 
                                        onChange={(e) => setEditTitle(e.target.value)}
                                    /> 
                                </td>
                                <td> 
                                    <input 
                                        type="text" 
                                        value={editDetail} 
                                        onChange={(e) => setEditDetail(e.target.value)}
                                    /> 
                                </td>
                                <td className='d-flex justify-content-end'>
                                    <button 
                                        onClick={() => handleEdit()} 
                                        type='button' 
                                        className='btn btn-success'>
                                            <i className="fa-solid fa-check"></i>
                                    </button> 
                                    <button 
                                        onClick={() => cancelEdit()} 
                                        type='button' 
                                        className='btn btn-danger'>
                                            <i className="fa-solid fa-xmark"></i>
                                    </button>
                                </td>
                            </>
                            ) : (
                            <>
                                <td>
                                    <input 
                                        type="checkbox" 
                                        className='form-check-input'
                                        onChange={() => handleDone(todo.id)}
                                    />
                                </td>
                                <td className={todo.is_done? 'todoDone' : ''}> {todo.title} </td>
                                <td className={todo.is_done? 'todoDone' : ''}> {todo.detail} </td>
                                <td className='d-flex justify-content-end'>
                                    <button 
                                        onClick={() => editClick(todo.id, todo.title, todo.detail)}
                                        type='button' 
                                        className='btn btn-secondary'>
                                            <i className="fa-regular fa-pen-to-square"></i>
                                    </button>
                                    <button 
                                        onClick={() => deleteTodoData(todo.id)}
                                        type='button' 
                                        className='btn btn-danger'>
                                            <i className="fa-regular fa-trash-can"></i>
                                    </button>
                                </td>
                            </>
                            )
                        }
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default TodoList;