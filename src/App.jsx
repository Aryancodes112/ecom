import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';

import Home from './Components/Home';
import Categories from './Components/Categories';
import Products from './Components/Products';
import Cart from './Components/Cart';

function App() {
  return (
    <Router>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;