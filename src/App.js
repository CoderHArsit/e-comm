import Navbar from './components/Navbar';
// import Modal from './components/Modal';
// import About from './components/About';
import React from 'react'
import './App.css';
import Catalogue from './components/Catalogue';
import {
  
  Routes,
  Route

} from "react-router-dom";
import Modal from './components/Modal';
import Home from './components/Home';
import Product from './components/Product';
import Products from './components/Products';
import Checkout from './components/Checkout';
// import { Home } from './components/Home';
// import { Alert } from './components/Alert';

function App() {
  return (
    <div className="container">
    <Navbar/> 

    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/products" element={<Products/>}/>
      <Route exact path="/products/:id" element={<Product/>}/>
      <Route exact path="/cart" element={<Checkout/>}/>

    </Routes>
    
    </div>
  );
}

export default App;
