import React from 'react';
import ProductCard from '../components/ProductCard';
import './Home.css';
import HeroSection from '../components/HeroSection';

const Home = () => {
  const products = [
    { id: 1, name: 'Lehanga', price: '$999', image: 'https://www.bunaai.com/cdn/shop/products/indianwearonline-9983.jpg?v=1673505559' },
    { id: 2, name: 'Kurti', price: '$699', image: 'https://static.cilory.com/687868-thickbox_default/cotton-motif-printed-lace-detailed-straight-kurti-by-kiasha.jpg' },
    { id: 3, name: 'Crop Top', price: '$199', image: 'https://images.meesho.com/images/products/368517173/j6x6s_512.jpg' },
  ];

  return (
    <div className="home">
      <HeroSection/>
      <h1>Featured Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
