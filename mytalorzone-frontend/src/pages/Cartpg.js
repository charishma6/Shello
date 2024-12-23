import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const response = await axios.get('http://localhost:5000/cart/USER_ID');
      setCartItems(response.data);
    };
    fetchCart();
  }, []);

  return (
    <Container>
      <h1>Your Cart</h1>
      {cartItems.map((item) => (
        <CartItem key={item.id}>
          <p>{item.product.name}</p>
          <p>Qty: {item.quantity}</p>
          <p>Price: ₹{item.product.price}</p>
        </CartItem>
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

export default Cart;
