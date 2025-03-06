import React from 'react';
import { Link } from 'react-router';
import useProductStore from './productStore';
import './productcards.css';
import add_icon from '../assets/add_icon.svg';
import remove_icon from '../assets/remove_icon.svg';

const ProductCard = ({ product }) => {
  const isInCart = useProductStore((state) => state.shoppingCart.find((f) => f.id === product.id));
  const addToCart = useProductStore((state) => state.addToCart);
  const removeFromCart = useProductStore((state) => state.removeFromCart);

  const toggleCart = () => {
    if (isInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    };

  }
 
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
            <p className='price'>${product.price}</p>
            <button onClick={toggleCart}>{isInCart ?
              <span className="material-symbols-outlined toggle-cart-icon">remove_shopping_cart</span>
              :
              <span className="material-symbols-outlined toggle-cart-icon">add_shopping_cart</span>}
            </button>
          </div>
          <div className='view-link-container'>
            <Link className='view-link' to={`/SingleProduct/${product.id}`}>View</Link>
          </div>
        </div>
    </>
    )
}

export default ProductCard;