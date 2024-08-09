import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Features/cartSlice';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = 'https://fakestoreapi.com/products';

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching data: ' + error.message);
        setLoading(false);
      });
  }, []);

  const dispatch = useDispatch();

  const handler = (product) => {
    console.log('Adding product to cart:', product); // Log the product being added
    dispatch(addToCart(product));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
            rating={product.rating}
            handler={handler}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
