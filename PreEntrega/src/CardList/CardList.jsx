import { Link } from "react-router-dom"
import styles from "./CardList.module.css"

const CardList = ({ producto }) => {
    return (
        <div className={styles.card}>
            <Link to={`${producto.id}`}>
                <img src={producto.image} alt={producto.title} />
            </Link>

            <h3>{producto.title}</h3>
            <p>${producto.price}</p>
            
            <Link to={`${producto.id}`}>
                <button>Ver producto</button>
            </Link>
        </div>
    )
}

export default CardList
