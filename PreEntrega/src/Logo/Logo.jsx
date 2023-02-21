import styles from "./logo.module.css"
import logo from "../assets/logo.png"

function Logo() {
  return (
    <div>
    <img src={logo} className={styles.logo}></img>
    </div>
  )
}

export default Logo
