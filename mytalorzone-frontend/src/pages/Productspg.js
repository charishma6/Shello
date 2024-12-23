import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`http://localhost:5000/product/${id}`);
      setProduct(response.data);
    };
    fetchProduct();
  }, [id]);

  return (
    product && (
      <Container>
        <Image src={product.image} alt={product.name} />
        <Details>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h2>₹{product.price}</h2>
          <button>Add to Cart</button>
        </Details>
      </Container>
    )
  );
};

const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
`;

const Image = styled.img`
  width: 50%;
`;

const Details = styled.div`
  flex: 1;

  h1 {
    font-size: 2rem;
  }

  p {
    margin: 10px 0;
    font-size: 1.1rem;
  }

  h2 {
    margin: 20px 0;
    font-size: 1.5rem;
    color: #d32f2f;
  }

  button {
    padding: 10px 20px;
    background: #333;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

export default Product;
