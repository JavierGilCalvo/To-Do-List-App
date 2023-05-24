import styles from './AddList.module.css'
import Image from 'next/image'

export default function AddList () {
  return (
        <div className={styles.addFrame}>
            <Image className={styles.addIcon} src='/add.png' alt='Add list' width={14} height={14}></Image>
            <span className={styles.textAdd}>
                Añada otra lista
            </span>
        </div>
  )
}
