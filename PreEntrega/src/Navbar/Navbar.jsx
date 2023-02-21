import styles from "./navbar.module.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from "../Logo/Logo.jsx"


const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        <Logo />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Categories</li>
        <li>Contact us</li>
        <ShoppingCartIcon/>2
      </ul>
    </div>
  )
}

export default Navbar
