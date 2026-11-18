import { use, useState } from "react";
import style from './Task.module.css';

export default function Task({task,setTask, index}) {

    const [isEditing, setIsEditing] = useState(false);
    const [edited, setEdited] = useState(task.name);

    const completeTask = () => {
        setTask(prevTask => prevTask.map((item, i) =>
            i === index ?
                {...item, done: !item.done} : item
        ))
    }
    const deleteTask = () => {
        setTask(prevTasks => prevTasks.filter(item =>
            item.id != task.id

        ))
    }

    const handleIsEditing =  () => {
        if(isEditing){
            setTask(prevTask => prevTask.map(item => 
                item.id === task.id
                    ? {...item, name: edited}
                    : item
            ))
        }

        
            setIsEditing(!isEditing)
    }

 
    return (<li className={style.task}>
                <button onClick={completeTask} style={{backgroundColor: task.done ? '#2693ff' : '#ffffff' }} className={style.completeBtn}></button>
                {isEditing ?  
                <input className={style.text} style={{backgroundColor: '#ffffff' }} type="text" onChange={(e) => setEdited(e.target.value)} value={edited} /> :
                <p className={style.text} style={{backgroundColor: task.done ? '#7d7d7d' : '#f0ffff' }} >{task.name}</p>
                }
                <button className={style.edit} onClick={handleIsEditing}>{isEditing? 'save': 'edit'}</button>
                <button className={style.delete} onClick={deleteTask}>delete</button>

        </li>
    )
}