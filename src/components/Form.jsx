import { useState } from "react";
import style from './Form.module.css'

export default function Form({tasks, setTask}){

    const [input, setInput] = useState('');

    const addTask = (e) => {
        e.preventDefault();
        if(input !== ""){
            setTask(task => [...task, input])
        }
        setInput('');
    }

    return (
    <form className={style.form} onSubmit={addTask}>
        <input className={style.input} id='input' type="text" onChange={e => setInput(e.target.value)} value={input} placeholder="Enter a new task"/>
        <button className={style.button} >Add</button>
    </form>
    )
}
