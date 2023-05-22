import styles from './SideMenu.module.css'
import TableCard from './TableCard'

export default function SideMenu () {
  return (
        <aside className={styles.aside}>
            <h3 className={styles.tableListTitle}>Mis Tableros</h3>
            <TableCard tableName={'Mi Tablero'} imageUrl={'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/140x79/29d47dfd35478703ce36efc5c1735cb5/photo-1568485275431-783e933f1fc2.jpg'}></TableCard>
            <TableCard tableName={'Mi Tablero 1'} imageUrl={'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/140x79/29d47dfd35478703ce36efc5c1735cb5/photo-1568485275431-783e933f1fc2.jpg'}></TableCard>
            <TableCard tableName={'Mi Tablero 2 Mi Tablero 2 Mi Tablero 2 Mi Tablero 2'} imageUrl={'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/140x79/29d47dfd35478703ce36efc5c1735cb5/photo-1568485275431-783e933f1fc2.jpg'}></TableCard>
        </aside>
  )
}
