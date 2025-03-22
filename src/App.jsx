import ReactDOM from 'react-dom';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Catalog from './pages/Catalog';
import Product from "./pages/Product";
import Cart, { CartProvider } from "./pages/Cart";
import Autho from "./pages/Autho";
import Register from "./pages/Register";
import CategoryProduct from "./pages/CategoryProducts";
import './App.css';
import FeedBackForm from './components/FeedBackForm.jsx';
import FeedBackFormPortal from './components/FeedBackForm.jsx';

function App() {

  return (
    <CartProvider>
      <div className="app-container">
        <Header />
        <div className='main-content'>
          <Routes>
            <Route path="/Catalog" element={<Catalog />} />
            <Route path="/Product/:id" element={<Product />} />
            <Route path="/Category/:id" element={<CategoryProduct />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Home" element={<Home />} />
            <Route path='/' element={<Autho />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;