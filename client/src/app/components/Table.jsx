import AddList from './AddList'
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
  },
  {
    id: 3,
    name: 'Tarea 2'
  },
  {
    id: 4,
    name: 'Tarea 2'
  },
  {
    id: 5,
    name: 'Tarea 2'
  },
  {
    id: 6,
    name: 'Tarea 2'
  },
  {
    id: 7,
    name: 'Tarea 2'
  },
  {
    id: 8,
    name: 'Tarea 2'
  },
  {
    id: 9,
    name: 'Tarea 2'
  },
  {
    id: 10,
    name: 'Tarea 2'
  },
  {
    id: 11,
    name: 'Tarea 2'
  },
  {
    id: 12,
    name: 'Tarea 2'
  },
  {
    id: 13,
    name: 'Tarea 2'
  },
  {
    id: 14,
    name: 'Tarea 2'
  },
  {
    id: 15,
    name: 'Tarea 2'
  },
  {
    id: 16,
    name: 'Tarea 2'
  },
  {
    id: 17,
    name: 'Tarea 2'
  },
  {
    id: 18,
    name: 'Tarea 2'
  },
  {
    id: 19,
    name: 'Tarea 2'
  }
]

export default function Table () {
  return (
        <main className={styles.mainContainer}>
          <section className={styles.table}>
            <TaskList taskList={taskList}></TaskList>
            <AddList></AddList>
          </section>
        </main>
  )
}
