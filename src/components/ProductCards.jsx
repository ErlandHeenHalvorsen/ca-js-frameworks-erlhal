import React from "react";
import { Link } from "react-router";
import useProductStore from "./productStore";
import "./productcards.css";

const ProductCard = ({ product }) => {
  const isInCart = useProductStore((state) =>
    state.shoppingCart.find((f) => f.id === product.id)
  );
  const addToCart = useProductStore((state) => state.addToCart);
  const removeFromCart = useProductStore((state) => state.removeFromCart);

  const priceLabel = product.discountedPrice && product.discountedPrice !== product.price ? (
    <span>
      <del className="text-gray-400">${product.price}</del> <span className="text-green-400">${product.discountedPrice}</span>
    </span>
  ) : (
    <span>${product.price}</span>
  );

  const toggleCart = () => {
    if (isInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <>
      <div className="store-element" key={product.id}>
        <div className="image-container">
          <img className="image" src={product.image.url} alt="" />
        </div>
        <div>
          <h1 className="card-title">{product.title}</h1>
        </div>
        <div className="price-view">
          <p>{priceLabel}</p>
          <button onClick={toggleCart}>
            {isInCart ? (
              <span className="material-symbols-outlined toggle-cart-icon">
                remove_shopping_cart
              </span>
            ) : (
              <span className="material-symbols-outlined toggle-cart-icon">
                add_shopping_cart
              </span>
            )}
          </button>
        </div>
        <div className="view-link-container">
          <Link className="view-link" to={`/Product/${product.id}`}>
            View
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
