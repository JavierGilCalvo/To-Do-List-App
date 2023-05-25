import AddTask from './AddTask'
import Task from './Task'
import styles from './TaskList.module.css'

export default function TaskList ({ taskList }) {
  return (
    <div className={styles.taskWrapper}>
      <section className={styles.taskSection}>
          <div className={styles.taskTitle}>Lista de Tareas...</div>
          <ul className={styles.taskList}>
            {
                  taskList.map((task) => {
                    return (
                          <Task key={task.id} task={task}></Task>
                    )
                  })
              }
          </ul>
          <AddTask></AddTask>
        </section>
    </div>
  )
}
