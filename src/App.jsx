import { useState } from 'react'
import style from './App.module.css'
import Form from './components/Form.jsx'
import TaskList from './components/TaskList.jsx'

function App() {
  const [tasks, setTask] = useState([])

  return (<>    
    <header className={style.header}>
      <h1 className={style.title}>To Do list</h1>
    </header>
    <main className={style.main}>
      <Form tasks={tasks} setTask={setTask}/>
      <TaskList  tasks={tasks} setTask={setTask}/>
    </main>
    </>
  )
}

export default App
