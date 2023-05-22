import Task from './Task'
import styles from './TaskList.module.css'

export default function TaskList ({ taskList }) {
  return (
        <ul className={styles.taskList}>
            {
                taskList.map((task) => {
                  return (
                        <Task key={task.id} task={task}></Task>
                  )
                })
            }
        </ul>
  )
}
