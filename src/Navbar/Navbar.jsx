import styles from "./navbar.module.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from "../Logo/Logo.jsx"
import { Link } from "react-router-dom";
import React from 'react';


const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div>
      <Link to="/">
        <Logo />
      </Link>
      </div>
      <ul className={styles.deco}>
        <Link to="/">
        <li>Inicio</li>
        </Link>

        <Link to="/productos">
        <li>Productos</li>
        </Link>

        <Link to="/check-out" className="carrito">
        <li><ShoppingCartIcon/></li>
        </Link>

        
      </ul>
    </nav>
  )
}

export default Navbar
