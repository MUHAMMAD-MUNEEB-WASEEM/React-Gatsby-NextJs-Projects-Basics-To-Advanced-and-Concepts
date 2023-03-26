import React from 'react';

//importing router components
import { Routes, Route, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


import Home from './Home';
import About from './About';
import { NotFound } from './NotFound' 
import Product from './Product';
import ProductDetails from './ProductDetails';
import ProductHome from './ProductHome';




function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <h1>Welcome to React Router</h1>
      <div>
        <Link to="/">Home</Link> {' '}
        <Link to="about">About</Link> {' '}
        <Link to="products">Products</Link>
        <Link to="products/nike">Nike</Link> {' '}
        <Link to="products/addidas">Addidas</Link>
        <button onClick={ () => {navigate('/about')}}>Dynamic Navigation</button>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        
        <Route path="products" element={<Product />}>
          <Route path="/" element={<ProductHome />}></Route>
          <Route path=":productId" element={<ProductDetails />}></Route>
        </Route> 
        
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
