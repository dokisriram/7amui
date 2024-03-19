import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={`text-center bg-primary text-white ${styles.header}`}>
      End to End Application
    </div>
  )
}

export default Header
