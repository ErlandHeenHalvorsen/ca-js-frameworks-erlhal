import React from 'react';
import { Link } from 'react-router';
import useProductStore from './productStore';
import './productcards.css';

const ProductCard = ({ product }) => {
    const isInCart = useProductStore((state) => state.shoppingCart.find((f) => f.id === product.id));
 
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
            <Link className='view-link' to={`/SingleProduct/${product.id}`}>View</Link>
          </div>
              <p>{ isInCart ? "inCart" : "notInCart"}</p>
        </div>
    </>
    )
}

export default ProductCard;