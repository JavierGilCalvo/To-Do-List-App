import styles from './TableCard.module.css'
import Image from 'next/image'

export default function TableCard ({ tableName, imageUrl }) {
  return (
        <li className={styles.card}>
            <img className={styles.tableImage} src={imageUrl}></img>
            <p className={styles.cardTitle}>{tableName}</p>
            <div className={styles.removeIconContainer}>
              <Image className={styles.removeIcon} src='/remover.png' alt='Add list' width={16} height={16}></Image>
            </div>
        </li>
  )
}
