import { useState } from "react";

export default function Form({task, setTask}){

    const [input, setInput] = useState('');

    const addTask = (e) => {
        e.preventDefault();
        if(input !== ""){
            setTask(task => [...task, input])
        }
        setInput('');
    }

    return (
    <form onSubmit={addTask}>
        <input id='input' type="text" onChange={e => setInput(e.target.value)} value={input} placeholder="Enter a new task"/>
        <button >Add</button>
    </form>
    )
}
