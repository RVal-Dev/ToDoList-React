import { useState } from "react";
import style from './Task.module.css';

export default function Task({task,setTask, index}) {


    const completeTask = () => {
        setTask(prevTask => prevTask.map((item, i) =>
            i === index ?
                {...item, done: !item.done} : item
        ))
    }
    console.log(task.done);
 
    return (<li className={style.task}>
                <button onClick={completeTask} style={{backgroundColor: task.done ? '#2693ff' : '#ffffff' }} className={style.completeBtn}></button>
                <p className={style.text}>{task.name}</p>
                <button className={style.edit}>edit</button>
                <button className={style.delete}>delete</button>

        </li>
    )
}