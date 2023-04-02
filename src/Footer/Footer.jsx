import styles from './Footer.module.css';
import React from 'react';

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <p className={styles.disclaimer}>© 2023 - Ecommerce. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;