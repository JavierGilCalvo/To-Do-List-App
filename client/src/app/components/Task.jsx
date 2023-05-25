import styles from './Task.module.css'
import { useId } from 'react'
import Image from 'next/image'
import TaskCheckbox from './TaskCheckbox'

export default function Task ({ task }) {
  const taskId = useId()
  return (
        <li className={styles.task}>
          <div className={styles.taskContent}>
            <TaskCheckbox taskId={taskId} taskName={task.name}></TaskCheckbox>
            <label htmlFor={taskId}>{task.name}</label>
            <div className={styles.removeIconContainer}>
              <Image className={styles.removeIcon} src='/remover.png' alt='Add list' width={16} height={16}></Image>
            </div>
          </div>
        </li>
  )
}
