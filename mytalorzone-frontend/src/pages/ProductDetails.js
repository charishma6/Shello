import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const product = {
    1: { name: 'Lehanga', price: '$999', description: 'Best seller recently', image: 'https://www.bunaai.com/cdn/shop/products/indianwearonline-9983.jpg?v=1673505559' },
    2: { name: 'kurti', price: '$699', description: 'Latest kurti collection!', image: 'https://static.cilory.com/687868-thickbox_default/cotton-motif-printed-lace-detailed-straight-kurti-by-kiasha.jpg' },
    3: { name: 'Crop Top', price: '$199', description: 'Fashion redefined', image: 'https://images.meesho.com/images/products/368517173/j6x6s_512.jpg' },
  }[id];

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
