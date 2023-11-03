import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className='tv'>
    <h1 className='logo'>ESSPN</h1>
    <p>SCORES</p>
    <p>HIGHLIGHTS</p>
    <p>TEAMS</p>
      </div>
    </main>
  )
}
