import styles from "./logo.module.css"
import logo from "../assets/logo.png"
import React from 'react';

function Logo() {
  return (
    <div>
    <img src={logo} className={styles.logo}></img>
    </div>
  )
}

export default Logo
