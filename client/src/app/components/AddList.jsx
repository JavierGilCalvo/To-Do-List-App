import styles from './AddList.module.css'
import Image from 'next/image'

export default function AddList () {
  return (
        <div className={styles.addFrame}>
          <div>
            <Image className={styles.addIcon} src='/add.png' alt='Add list' width={14} height={14}></Image>
            <span className={styles.textAdd}>
                Añada otra lista
            </span>
          </div>
          <form>
            <input type='text' name='AddNewList' placeholder='Introduce el título de la lista...' autoComplete='off'></input>
            <div className={styles.formInputActions}>
              <button className={styles.addButton} type='submit'>Añadir lista</button>
              <Image className={styles.closeIcon} src='/close.png' alt='Add list' width={16} height={16}></Image>
            </div>
          </form>
        </div>
  )
}
