import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../ProductContextProvider/productContext";
import styles from "./checkout.module.css";

const Checkout = () => {
  const { selectedProduct } = useContext(ProductContext);

  if (!selectedProduct) {
    return <div>Producto no encontrado</div>;
  }

  const handleBuyClick = () => {
    // Renderizar el componente Thankyou
  };

  return (
    <div className={styles.checkoutContainer}>
      <h2 className={styles.checkoutTitle}>Resumen de compra</h2>
          {selectedProduct.map((product, index) => (
          <div className={styles.checkoutItemContainer}>
            <img
              src={product.Image}
              alt={product.Title}
              className={styles.checkoutItemImage}
            />
            <div className={styles.checkoutItemDetails}>
              <h3 className={styles.checkoutItemTitle}>
                {product.Title}
              </h3>
              <p className={styles.checkoutItemPrice}>
                Cantidad: {product.Count}
              </p>
              <p className={styles.checkoutItemPrice}>
                Precio Unitario: ${product.Price}
              </p>
              <p className={styles.checkoutItemPrice}>
                Precio Final: ${product.FinalPrice}
              </p>
            </div>
          </div>
        )) 
      }
      <form className={styles.checkoutForm}>
        <label htmlFor="nombre" className={styles.checkoutLabel}>
          Nombre:
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          className={styles.checkoutInput}
        />
        <label htmlFor="apellido" className={styles.checkoutLabel}>
          Apellido:
        </label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          className={styles.checkoutInput}
        />
        <label htmlFor="email" className={styles.checkoutLabel}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.checkoutInput}
        />
        <label htmlFor="direccion" className={styles.checkoutLabel}>
          Dirección:
        </label>
        <textarea
          id="direccion"
          name="direccion"
          rows="3"
          className={styles.checkoutTextarea}
        ></textarea>
        <Link to="/thankyou-page" onClick={handleBuyClick}>
          <button type="submit" className={styles.checkoutButton}>
            Realizar compra
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Checkout;