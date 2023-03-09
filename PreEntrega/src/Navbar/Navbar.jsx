import styles from "./navbar.module.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from "../Logo/Logo.jsx"
import { Link } from "react-router-dom";


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
        <li>Nosotros</li>
        <Link to="/productos">
        <li>Productos</li>
        </Link>
        <li>Contacto</li>
        <ShoppingCartIcon/>
      </ul>
    </nav>
  )
}

export default Navbar
