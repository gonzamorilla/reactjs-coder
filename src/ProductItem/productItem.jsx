import { useParams, useNavigate, Link } from "react-router-dom";
import styles from "./productItem.module.css";
import { useEffect, useState, useContext } from "react";
import { ProductContext } from "../ProductContextProvider/productContext";
import React from 'react';

const ProductItem = ({ productos }) => {
  const { id } = useParams();
  const producto = productos.find((producto) => producto.id == id);
  const history = useNavigate ();
  const { setSelectedProduct } = useContext(ProductContext); // Aquí se usa el hook useContext para acceder a los datos del contexto

  const [productPrice, setProductPrice] = useState(producto.Price);
  const [productQuantity, setproductQuantity] = useState(1);

  useEffect(() => {
    if (productQuantity > 0) setProductPrice(producto.Price * productQuantity);
  }, [productQuantity]);

  const onChange = () => {
    setproductQuantity(document.getElementById("identify").value);
  };

  const handleBuyClick = () => {
    setSelectedProduct(producto);
  };

  return (
    <div className={styles.productCard}>
      <h3>{producto.Title}</h3>
      <div className={styles.productImageContainer}>
        <img src={producto.Image} alt={producto.Title} />
      </div>
      <div className={styles.productInfoContainer}>
        <p>{producto.description}</p>
      </div>

      <label>Cantidad:</label>
      <input id="identify" onChange={onChange} type="number" min="1" defaultValue="1" />

      <div>
        <Link to="/check-out" onClick={handleBuyClick}>
          <button className={styles.buyButton}>${productPrice}</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
