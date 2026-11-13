import { useState } from 'react'
import style from './App.module.css'
import Form from './components/Form.jsx'
import TaskList from './components/TaskList.jsx'

function App() {
  const [tasks, setTask] = useState([])

  return (
    <main className={style.main}>
    <Form tasks={tasks} setTask={setTask}/>
    <TaskList  tasks={tasks}/>
    </main>
  )
}

export default App
