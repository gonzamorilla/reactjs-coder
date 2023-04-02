import React from "react";
import styles from "./thankyou.module.css";

const Thankyou = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>¡Gracias por su compra!</h2>
      <p className={styles.message}>Nos pondremos en contacto con usted próximamente para confirmar la compra y enviarle la factura correspondiente.</p>
      <div className={styles.contact}>
        <h3>Información de contacto</h3>
        <ul>
          <li><strong>Teléfono:</strong> +1 (123) 456-7890</li>
          <li><strong>Correo electrónico:</strong> info@tu-tienda.com</li>
          <li><strong>Dirección:</strong> Calle Falsa 123, Ciudad Ficticia, CP 12345</li>
        </ul>
      </div>
      <p className={styles.more}>Para más información sobre nuestros productos y servicios, visite nuestra página web.</p>
    </div>
  );
};

export default Thankyou;
