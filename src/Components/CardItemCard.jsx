import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../Features/cartSlice';

const CartItemCard = ({ id, image, title, price, quantity }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart({ id }));
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity({ id }));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity({ id }));
  };

  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full h-64 overflow-hidden">
          <img
            className="w-full h-full object-contain p-4"
            src={image}
            alt={title}
          />
        </div>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">{title}</h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <button onClick={handleDecrement} className="text-gray-400 hover:text-gray-600">
                -
              </button>
              <span className="text-gray-500 dark:text-gray-400">{quantity}</span>
              <button onClick={handleIncrement} className="text-gray-400 hover:text-gray-600">
                +
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${price.toFixed(2)}</span>
            <button
              onClick={handleRemove}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Remove
            </button>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default CartItemCard;