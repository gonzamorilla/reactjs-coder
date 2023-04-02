import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../ProductContextProvider/productContext";
import styles from "./checkout.module.css";

const Checkout = () => {
  const { selectedProduct } = useContext(ProductContext);

  if (!selectedProduct) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className={styles.checkoutContainer}>
      <h2 className={styles.checkoutTitle}>Resumen de compra</h2>
      <div className={styles.checkoutItemContainer}>
        <img src={selectedProduct.Image} alt={selectedProduct.Title} className={styles.checkoutItemImage} />
        <div className={styles.checkoutItemDetails}>
          <h3 className={styles.checkoutItemTitle}>{selectedProduct.Title}</h3>
          <p className={styles.checkoutItemPrice}>Precio: ${selectedProduct.Price}</p>
        </div>
      </div>
      <Link to="/productos" className={styles.checkoutLink}>Volver a la lista de productos</Link>
    </div>
  );
};

export default Checkout;
