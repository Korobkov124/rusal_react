import React, { useState } from "react";
import { Link } from "react-router-dom";
import FeedBackFormPortal from "./FeedBackForm";

function Header() {
  const [isFormOpen, setisFormOpen] = useState(false);
  const openForm = () => setisFormOpen(true);
  const closeForm = () => setisFormOpen(false);

    return (
        <nav id="header">
            <Link to="/Home">Главная</Link>
            <Link to="/catalog">Каталог</Link>
            <Link to="/cart">Корзина</Link>
            <div className='form_container'>
                <button className='btn btn-secondary' onClick={openForm}>
                        Cвязь
                </button>
                <FeedBackFormPortal isOpen={isFormOpen} onClose={closeForm} />
            </div>
        </nav>
    );
}

export default Header;