import { useState } from "react";
import style from './Task.module.css';

export default function Task({task}) {

    const [color, setColor] = useState("#ffffff")

    const completeTask = () => {
        if(color === "#ffffff"){
            setColor('#2693ff')
            //Mark task as done
        } else {
            // Remove mark as done
            setColor("#ffffff")
        }
    }
 
    return (<li className={style.task}>
                <button onClick={completeTask} style={{backgroundColor: color}} className={style.completeBtn}></button>
                <p className={style.text}>{task}</p>
                <button className={style.edit}>edit</button>
                <button className={style.delete}>delete</button>

        </li>
    )
}