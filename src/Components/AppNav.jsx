import React from 'react'
import styles from './AppNav.module.css'
import { NavLink } from 'react-router-dom'

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <NavLink to='cities'><li>Cities</li></NavLink>
        <NavLink to='countries'><li>Countries</li></NavLink>
      </ul>
    </nav>
  )
}

export default AppNav