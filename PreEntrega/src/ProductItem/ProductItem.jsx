import { useParams } from "react-router-dom"
import styles from "./productItem.module.css"

const ProductItem = ({ productos }) => {

    const {id} = useParams()
    const producto = productos.find((producto) => producto.id == id)

    return (
        <div>
            <h3>{producto.title}</h3>
            <img src={producto.image} alt={producto.title} />
            <h4>{producto.category}</h4>
            <p>{producto.description}</p>
            <p>Rating:{producto.rating.rate}</p>
            <button>${producto.price}</button>
        </div>
    )
}

export default ProductItem
