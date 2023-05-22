import styles from './Table.module.css'
import TaskList from './TaskList'

const taskList = [
  {
    id: 1,
    name: 'Tarea 1'
  },
  {
    id: 2,
    name: 'Tarea 2'
  }
]

export default function Table () {
  return (
        <main className={styles.mainContainer}>
            <div className={styles.taskList}>
                <TaskList taskList={taskList}></TaskList>
            </div>
        </main>
  )
}
