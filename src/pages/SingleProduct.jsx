import React from "react"
import { useParams } from "react-router"
import useProductStore from "../components/productStore"

const SingleProduct = () => {
    const { id } = useParams()
    const product = useProductStore((state) => state.products.find((f) => f.id === id))
    const addToCart = useProductStore((state) => state.addToCart)
    const removeFromCart = useProductStore((state) => state.removeFromCart)
    const isInCart = useProductStore((state) => state.shoppingCart.find((f) => f.id === id))

    if (!product) {
        return <p>Product not found</p>
    }

    const handleCartAction = () => {
        if (isInCart) {
            removeFromCart(product.id);
        } else {
            addToCart(product);
        }
    };
    console.log(product)

    return (
        <>
            <h1>{product.title}</h1>
            <button onClick={handleCartAction}>
                {isInCart ? "Remove from cart" : "Add to cart"}
            </button>
        </>
    )

}

export default SingleProduct;