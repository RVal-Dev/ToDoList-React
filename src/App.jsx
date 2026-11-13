import { useState } from 'react'
import './App.css'
import Form from './components/form'

function App() {
  const [task, setTask] = useState([])
  console.log(task);

  return (
    <>
    <Form task={task} setTask={setTask}/>

    {task.map((t, index) =>
      <li key={index}>{t}</li>
    )}
    </>
  )
}

export default App
