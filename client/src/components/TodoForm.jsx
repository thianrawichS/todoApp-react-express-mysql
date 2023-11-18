import { useState } from 'react'

const TodoForm = (props) => {
    const { addTodoData } = props
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');

    const handleAddTodoData = (e) => {
        e.preventDefault()
        addTodoData(title, detail)
        setTitle('');
        setDetail('');
    }

    return (
        <div className='container mb-3'>
            <form 
                className='d-flex align-items-end justify-content-center'
                onSubmit={handleAddTodoData}
            >
                <div>
                    <input 
                        className='form-control' 
                        type="text" 
                        placeholder='Title'
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input 
                        className='form-control' 
                        type="text" 
                        placeholder='Detail'
                        value={detail} 
                        onChange={(e) => setDetail(e.target.value)}
                    />
                </div>
                <div>
                    <button className='btn btn-primary' type='submit'> 
                        Add 
                    </button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm;