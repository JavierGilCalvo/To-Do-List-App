import SideMenu from './components/SideMenu'
import Table from './components/Table'
import styles from './page.module.css'

export default function ToDoListPage () {
  return (
    <main className={styles.main}>
      <div className={styles.mainFrame}>
        <SideMenu></SideMenu>
        <Table></Table>
      </div>
    </main>
  )
}
