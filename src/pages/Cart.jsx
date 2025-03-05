import useProductStore from "../components/productStore";
import CheckoutForm from "../components/CheckoutForm";
import '../app.css'

const Cart = () => {
    const cart = useProductStore((state) => state.shoppingCart);
    const getPrice = (product) => {
        return product.discountedPrice ? product.discountedPrice : product.price;
    }

    return (
        <div className="cart">
            <div>
                <h1>Cart</h1>
                <ul>
                    {cart.map((product) => (
                        <li key={product.id}>
                            <div>
                                <h2>{product.title}</h2>
                                <p>Price:{getPrice(product)}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="checkout-form">
                <CheckoutForm />
            </div>
        </div>
    )
}

export default Cart;