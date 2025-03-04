import React from 'react';
import { Link } from 'react-router';
import useProductStore from './productStore';

const ProductCard = ({ product }) => {
    const isInCart = useProductStore((state) => state.shoppingCart.find((f) => f.id === product.id));
 
    return (
    <>
        <div className="store-element" key={product.id}>
          <div>
            <img src={product.image.url} alt="" />
          </div>
          <div>
            <h1>{product.title}</h1>
          </div>
          <div>
            <p>${product.price}</p>
            <Link to={`/SingleProduct/${product.id}`}>View</Link>
          </div>
              <p>{ isInCart ? "inCart" : "notInCart"}</p>
        </div>
    </>
    )
}

export default ProductCard;