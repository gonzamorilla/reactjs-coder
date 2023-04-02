import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../ProductContextProvider/productContext";

const Checkout = () => {
  const { selectedProduct } = useContext(ProductContext);

  if (!selectedProduct) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <h2>Resumen de compra</h2>
      <div>
        <img src={selectedProduct.Image} alt={selectedProduct.Title} />
        <h3>{selectedProduct.Title}</h3>
        <p>Precio: ${selectedProduct.Price}</p>
      </div>
      <Link to="/">Volver a la lista de productos</Link>
    </div>
  );
};

export default Checkout;