import { Link } from "react-router-dom"
import background from "../assets/background.png"
import styles from "./itemListContainer.module.css"

const ItemListContainer = ({ textH1 }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{textH1}</h1>
        <Link to="/productos">
        <button className={styles.button}>Ver productos</button>
        </Link>
      </div>
      <div className={styles.background}>
        <img src={background} className={styles.backgroundImage} />
      </div>
    </div>
  )
}

export default ItemListContainer
