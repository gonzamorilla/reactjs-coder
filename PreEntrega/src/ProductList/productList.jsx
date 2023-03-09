import CardList from "../CardList/CardList"

const ProductList = ({ productos }) => {
    return (
        <div>
            {productos.map((producto) => (
                <CardList key={producto.id} producto={producto}/>
            ))}
        </div>
    )
}

export default ProductList