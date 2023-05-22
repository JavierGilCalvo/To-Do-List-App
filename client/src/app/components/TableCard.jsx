import styles from './TableCard.module.css'

export default function TableCard () {
  return (
        <li className={styles.card}>
            <div className={styles.tableImage} ></div>
            <p>Mi Tablero</p>
        </li>
  )
}
