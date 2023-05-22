import styles from './TableCard.module.css'

export default function TableCard ({ tableName, imageUrl }) {
  return (
        <li className={styles.card}>
            <img className={styles.tableImage} src={imageUrl}></img>
            <p className={styles.cardTitle}>{tableName}</p>
        </li>
  )
}
