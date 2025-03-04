import { Link } from "react-router-dom";
import useProductStore from "../productStore";
import styles from "./header.module.css";

function Header() {
  const cart = useProductStore((state) => state.shoppingCart);
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>My App</h1>
      <nav className={styles.header_nav}>
        <Link className={styles.header_link} to="/">Home</Link>
        <Link className={styles.header_link} to="/About">About</Link>
      </nav>
      <div className={styles.cart}>
        <span>{cart.length}</span>
        <Link to="/Cart"><span className="material-symbols-outlined">
            shopping_cart_checkout
        </span></Link>
      </div>
    </header>
  );
}
export default Header;
