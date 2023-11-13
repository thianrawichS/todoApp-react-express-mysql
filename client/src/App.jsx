import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import './App.css'

function App() {

  return (
    <>
      <AddTodo/>
      <TodoList/>
    </>
  )
}

export default App
