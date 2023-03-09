import { Link } from "react-router-dom"
import styles from "./CardList.module.css"

const CardList = ({ producto }) => {
    return (
        <Link to={`${producto.id}`}>
        <div className={styles.card}>
            <h3>{producto.title}</h3>
            <img src={producto.image} alt={producto.title} />
            <p>{producto.description}</p>
            <button>${producto.price}</button>
        </div>
        </Link>
    )
}

export default CardList
