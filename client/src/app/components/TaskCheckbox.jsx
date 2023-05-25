import styles from './TaskCheckbox.module.css'

export default function TaskCheckbox ({ taskId, taskName }) {
  return (
    <>
        <label className={styles.container}>
            <input type="checkbox" id={taskId} name={taskId}></input>
            <div className={styles.checkmark}></div>
        </label>
    </>
  )
}
