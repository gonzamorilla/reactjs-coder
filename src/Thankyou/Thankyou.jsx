import React, { useContext } from "react";
import styles from "./thankyou.module.css";
import { ProductContext } from "../ProductContextProvider/productContext";
import { Link } from "react-router-dom"

const Thankyou = () => {
  const { selectedProduct, setSelectedProduct } = useContext(ProductContext);

  const handleBuyClick = () => {  
    setSelectedProduct([])
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>¡Gracias por su compra!</h2>
      {selectedProduct.map((product, index) => (
        <div className={styles.thxItemContainer} key={index}>
          <img
            src={product.Image}
            alt={product.Title}
            className={styles.thxItemImage}
          />
          <div className={styles.thxItemDetails}>
            <h3 className={styles.thxItemTitle}>
              {product.Title}
            </h3>
            <p className={styles.thxItemPrice}>
              Precio Final: ${product.FinalPrice}
            </p>
          </div>
        </div>
      ))}

      <Link to="/">
        <button type="submit" className={styles.thxButton} onClick={handleBuyClick}>
          Volver a la tienda
        </button>
      </Link>
    </div>
  );
};

export default Thankyou;