import styles from './SideMenu.module.css'
import TableCard from './TableCard'

export default function SideMenu () {
  return (
        <aside className={styles.aside}>
            <h3 className={styles.tableListTitle}>Tableros</h3>
            <TableCard></TableCard>
        </aside>
  )
}
