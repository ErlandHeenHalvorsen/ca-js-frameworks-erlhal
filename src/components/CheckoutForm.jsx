import React from "react"
import useProductStore from "./productStore"

const CheckoutForm = () => {
    const cart = useProductStore((state) => state.shoppingCart);
    
    const calculateTotal = () => {
        return cart.reduce((total, product) => total + product.price, 0);
    };

    const totalValue = calculateTotal();
    return (
        <div className="checkout-form">
            <h2>Checkout</h2>
            <ul>
                {cart.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price.toFixed(2)}
                    </li>
                ))}
            </ul>
            <p>Total: ${totalValue.toFixed(2)}</p>
            <form>
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