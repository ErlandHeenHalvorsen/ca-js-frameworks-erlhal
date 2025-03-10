import React from "react"
import { useNavigate } from "react-router";
import useProductStore from "../productStore"
import './forms.css'

const CheckoutForm = () => {
    const cart = useProductStore((state) => state.shoppingCart);
    const navigate = useNavigate();

    const calculateTotal = () => {
        return cart.reduce((total, product) => total + product.price, 0);
    };

    const clearCart = useProductStore((state) => state.clearCart);

    const totalValue = calculateTotal();

    const handleSubmit = (event) => {
        event.preventDefault();
        const confirmation = window.confirm("Place order?");
        if (confirmation) {
            clearCart();
            navigate("/CheckoutSuccs")
        }
    }
    return (
        <div className="checkout-form">
            <h2>Checkout</h2>
            <ul>
                {cart.map((product) => (
                    <li key={product.id}>
                        {product.title} - ${product.price.toFixed(2)}
                    </li>
                ))}
            </ul>
            <p>Total: ${totalValue.toFixed(2)}</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <button type="submit">Place Order</button>
            </form>
        </div>
    );
};

export default CheckoutForm;