import React from 'react'
import styles from '../styles/loader.module.css'
import Spinner from './UI/Spinner'
const SplashScreen = () => {
  return (
    <div className='h-[100vh] bg-white flex flex-col justify-center items-center'>
      <Spinner size={60} />
      {/* <div className={styles.loader}>
      <p className={styles.heading}>Loading</p>
      <div className={styles.loading}>
        <div className={styles.load}></div>
        <div className={styles.load}></div>
        <div className={styles.load}></div>
        <div className={styles.load}></div>
       </div>
       </div> */}
       </div>
  )
}

export default SplashScreen