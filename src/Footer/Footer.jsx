import styles from './Footer.module.css';
import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
      <Link to="/">
        <li>Inicio</li>
        </Link>

        <Link to="/productos">
        <li>Productos</li>
        </Link>

        <Link to="/check-out">
        <li>Carrito</li>
        </Link>
      </ul>
      <p className={styles.disclaimer}>© 2023 - Ecommerce. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;