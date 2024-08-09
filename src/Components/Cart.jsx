// Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../Features/cartSlice';
import CartItemCard from './CardItemCard';

const Cart = () => {
  const products = useSelector((state) => state.cart.CartItems);
  const dispatch = useDispatch();

  console.log('Current cart items:', products);

  const getTotalPrice = () => {
    return products.reduce((total, product) => total + (product.price * product.quantity), 0);
  };

  const getTotalItems = () => {
    return products.reduce((total, product) => total + product.quantity, 0);
  };

  return (
    <>
      <h1>All the products from the Cart can be seen here</h1>
      <div className="cart-container">
        {products.map((product) => (
          <CartItemCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            quantity={product.quantity}
          />
        ))}
      </div>
      <aside className="mt-4">
        <p>Total: ${getTotalPrice().toFixed(2)}</p>
        <p>Total Items in the Cart: {getTotalItems()}</p>
        <p>Total Items you will get after checkout: {getTotalItems()}</p>
      </aside>
    </>
  );
};

export default Cart;