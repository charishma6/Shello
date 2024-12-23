import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <Link to={`/product/${product.id}`} className="btn">
        View Details
      </Link>
      <i classname="heart" className="fas fa-heart"></i>

    </div>
  );
};

export default ProductCard;
