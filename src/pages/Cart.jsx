import useProductStore from "../components/productStore";

const Cart = () => {
    const cart = useProductStore((state) => state.shoppingCart);
    const getPrice = (product) => {
        return product.discountedPrice ? product.discountedPrice : product.price;
    }

    return (
        <div className="cart">
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
            <div className="checkout-form"></div>
        </div>
    )
}

export default Cart;