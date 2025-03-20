import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Catalog from './pages/Catalog'
import Product from "./pages/Product"
import Cart, { CartProvider } from "./pages/Cart"
import Autho from "./pages/Autho"
import Register from "./pages/Register"
import CategoryProduct from "./pages/CategoryProducts"
import reactLogo from './assets/react.svg'
import './App.css'
import './components/FeedBackForm.jsx';

function App() {
  const [isFormOpen, setisFormOpen] = useState(false);
  const openForm = () => setisFormOpen(true);
  const closeForm = () => setisFormOpen(false);

  const FeedbackFormPortal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const portalRoot = document.getElementById('portal');
    return ReactDOM.createPortal(
      <FeedbackForm onClose={onClose} />,
      portalRoot
    )
  }

  return (
    <CartProvider>
    <Header>
      <div className='form_container'>
        <button className='btn btn-secondary'
         onClick={openForm}>
          Открыть форму обратной связи
        </button>
      </div>
      <FeedbackFormPortal isOpen={isFormOpen} onClose={closeForm} />
    </Header>
    <Routes>
        <Route path="/Catalog" element={<Catalog />}></Route>
        <Route path="/Product/:id" element={<Product />}></Route>
        <Route path="/Category/:id" element={<CategoryProduct />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Home" element={<Home />}> </Route>
        <Route path='/' element ={<Autho />}></Route>
        <Route path="*" element={<h1>404</h1>}></Route>
    </Routes>
    <Footer></Footer>
    </CartProvider>
  );
}

export default App;
