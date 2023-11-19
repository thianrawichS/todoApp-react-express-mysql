import { useState, useEffect } from 'react'
import axios from 'axios'
import './styles/TodoList.css'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import Header from './components/Header'
const SERVER_PORT = import.meta.env.VITE_APP_SERVER_PORT;

function App() {
  const [todoList, setTodoList] = useState([]);

  const getTodoData = async () => {
    try {
      const res = await axios.get(`http://localhost:${SERVER_PORT}/todo`)
      setTodoList(res.data)
    } catch (err) {
      console.error('Error executing get todo data query', err);
    }
  }
  const addTodoData = async (title, detail) => {
    try {
      const res = await axios.post(`http://localhost:${SERVER_PORT}/todo`, {
        title: title,
        detail: detail
      })
      setTodoList([...todoList, {
        id: res.data.insertId,
        title: title,
        detail: detail,
      }])
    } catch (err) {
      console.error('Error executing add todo data query', err);
    }
  }
  const updateTodoData = async (id, title, detail) => {
    try {
      const res = axios.put(`http://localhost:${SERVER_PORT}/todo/${id}`, {
        title: title,
        detail: detail
      })
      const updatedData = todoList.map(todo => {
        if (todo.id == id) {
          return {
            ...todo, 
            title: title, 
            detail: detail
          }
        }
        return todo
      })
      setTodoList(updatedData)
    } catch (err) {
      console.error('Error executing update todo data query', err);
    }
  }
  const deleteTodoData = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:${SERVER_PORT}/todo/${id}`);
      const updatedData = todoList.filter(todo => todo.id != id);
      setTodoList(updatedData)
    } catch (err) {
      console.error('Error executing delete todo data query', err);
    }
  }
  const handleDone = (id) => {
    const updatedData = todoList.map(todo => {
        if (todo.id == id) {
            return {
                ...todo,
                is_done: !(todo.is_done)
            }
        }
        return todo
    })
    setTodoList(updatedData);
  }

  useEffect(() => {
    getTodoData()
  }, [])
  
  return (
    <div>
      <Header/>
      <TodoForm
        addTodoData = {addTodoData}
      />
      <hr className='container'></hr>
      <TodoList 
        todoList = {todoList}
        deleteTodoData = {deleteTodoData}
        updateTodoData = {updateTodoData}
        handleDone = {handleDone}
      />
    </div>
  )
}

export default App
