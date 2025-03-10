import React from "react";
import { useParams } from "react-router";
import useProductStore from "../components/productStore";

const Product = () => {
    const { id } = useParams();
    const product = useProductStore((state) => state.products.find((f) => f.id === id));
    const addToCart = useProductStore((state) => state.addToCart);
    const removeFromCart = useProductStore((state) => state.removeFromCart);
    const isInCart = useProductStore((state) => state.shoppingCart.find((f) => f.id === id));




    if (!product) {
        return <p>Product not found</p>;
    }

    const handleCartAction = () => {
        if (isInCart) {
            removeFromCart(product.id);
        } else {
            addToCart(product);
        }
    };
    const priceLabel = product.discountedPrice && product.discountedPrice !== product.price ? (
        <span>
            <del className="text-gray-400">${product.price}</del> <span className="text-green-400">${product.discountedPrice}</span>
        </span>
    ) : (
        <span>${product.price}</span>
    );

    console.log(product);

    return (
        <>
            <div className=" flex flex-wrap text-white p-6  shadow-lg mx-auto">
                <div className="flex  flex-col" key={product.id}>
                    <div className="w-2/3">
                        <img
                            src={product.image.url}
                            alt={product.title}
                            className="rounded-lg w-full max-height- object-cover shadow-md"
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
                        <p className="text-[#FAFAFA] mb-4">{product.description}</p>
                        <p className="text-lg font-semibold">
                            {priceLabel}
                        </p>

                        <button
                            onClick={handleCartAction}
                            className="mt-4 flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-500 transition-all rounded-lg shadow-md"
                        >
                            {isInCart ? (
                                <span className="material-symbols-outlined text-white">remove_shopping_cart</span>
                            ) : (
                                <span className="material-symbols-outlined text-white">add_shopping_cart</span>
                            )}
                        </button>
                    </div>
                </div>

                <div id="product-reviews" className="mt-6 p-4  rounded-lg">
                    <h2 className="text-xl font-semibold mb-3">Reviews</h2>
                    {product.reviews && product.reviews.length > 0 ? (
                        <ul className="space-y-3">
                            {product.reviews.map((review, index) => (
                                <li key={index} className="p-3 border-b border-gray-700">
                                    <p className="font-bold text-gray-100">{review.username}</p>
                                    <p className="text-[#FAFAFA]">{review.description}</p>
                                    <p className="text-yellow-400">Rating: {review.rating} ⭐</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-400">No reviews yet.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Product;