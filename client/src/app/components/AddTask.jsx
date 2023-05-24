import styles from './AddTask.module.css'
import Image from 'next/image'

export default function AddTask () {
  return (
        <div className={styles.addFrame}>
        <Image className={styles.addIcon} src='/add.png' alt='Add list' width={14} height={14}></Image>
        <span className={styles.textAdd}>
            Añada otra tarea
        </span>
    </div>
  )
}
