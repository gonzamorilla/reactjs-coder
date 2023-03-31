import CardList from "../CardList/CardList"
import styles from "./productList.module.css"

const ProductList = ({ productos }) => {
    return (
        <div className={styles.productList} >
            {productos.map((producto) => (
                <CardList key={producto.id} producto={producto}/>
            ))}
        </div>
    )
}

export default ProductList