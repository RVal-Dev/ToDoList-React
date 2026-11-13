import Task from './Task'
import style from './TaskList.module.css'

export default function TaskList({tasks, setTask}) {

    return (
            <ul className={style.body}>
                {tasks.map((task, index) =>
                    <Task task={task} key={index} index={index} setTask={setTask} />
                )}
            </ul>
            )
}