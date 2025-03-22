import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);
        if (existingItem) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter((item) => item.id !== productId));
    };

    const increaseQuantity = (productId) => {
        setCartItems(cartItems.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const decreaseQuantity = (productId) => {
        setCartItems((prevItems) => {
            const itemToDecrease = prevItems.find(item => item.id === productId);
            if (itemToDecrease.quantity === 1) {
                return prevItems.filter(item => item.id !== productId);
            } else {
                return prevItems.map(item =>
                    item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                );
            }
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

function Cart() {
    const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);

    return (
        <div>
            <h1>Корзина</h1>
            {cartItems.length === 0 ? (
                <p>Корзина пустая</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <h2>{item.name}</h2>
                            <img src={item.product_img} alt="cartinka" width="250px" height="250px" style={{ borderRadius: 20 }} />
                            <p>{item.price} x {item.quantity}</p>
                            <button onClick={() => removeFromCart(item.id)}>Удалить</button>
                            <button onClick={() => increaseQuantity(item.id)}>+</button>
                            <button onClick={() => decreaseQuantity(item.id)}>-</button>
                        </li>
                    ))}
                </ul>
            )}
            <h2>Общая стоимость: {total.toFixed(2)} $.</h2>
        </div>
    );
}

export default Cart;
