import { useParams } from "react-router-dom"
import styles from "./productItem.module.css"
import SetQuantityButton from "../SetQuantityButton/setQuantityButton"

const ProductItem = ({ productos }) => {

    const { id } = useParams()
    const producto = productos.find((producto) => producto.id == id)

    return (
        <div className={styles.productCard}>
        <h3>{producto.title}</h3>
        <div className={styles.productImageContainer}>
          <img src={producto.image} alt={producto.title} />
        </div>
        <div className={styles.productInfoContainer}>
          <p>{producto.description}</p>
          <div className={styles.productRatingContainer}>
            <span className={styles.rating}>Rating: {producto.rating.rate}</span>
            <span className={styles.reviewCount}>({producto.rating.count} reviews)</span>
          </div>
          <button className={styles.buyButton}>${producto.price}</button>
        </div>
      </div>
    )
}

export default ProductItem
