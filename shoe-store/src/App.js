import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

//importing components
import Navbar from './components/Navbar/Navbar';
import { ProductDetails } from './components/ProductDetails';
import { Products } from './components/Products';
import Home from './components/Home';
import { ProductIndex } from './components/ProductIndex';
import { About } from './components/About';
import { Contact } from './components/Contact/Contact';



function App() {
  return (
    <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact/>}></Route>
          <Route path="*" element={<Home/>}></Route>
          <Route path="products" element={<Products/>}>
            <Route path="/" element={<ProductIndex />}></Route>
            <Route path=":productId" element={<ProductDetails />}></Route>
          
          </Route>

        </Routes>
    </div>
  );
}

export default App;
