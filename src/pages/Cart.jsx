import { Link } from "react-router";
import useProductStore from "../components/productStore";
import '../app.css'

const Cart = () => {
    const cart = useProductStore((state) => state.shoppingCart);
    const getPrice = (product) => {
        return product.discountedPrice ? product.discountedPrice : product.price;
    }
    const removeFromCart = useProductStore((state) => state.removeFromCart);

    return (
        <div className="cart">
            <div>
                <h1>Cart</h1>
                <ul>
                    {cart.map((product) => (
                        <li className="cart-item" key={product.id}>
                            <div>
                                <h2>{product.title}</h2>
                                <p>Price:{getPrice(product)}</p>
                            </div>
                            <button onClick={removeFromCart.bind(null, product.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
            <Link className="checkout-btn" to="/checkout">Checkout</Link>
        </div>
    )
}

export default Cart;