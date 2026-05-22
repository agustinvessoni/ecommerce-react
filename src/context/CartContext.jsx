import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

/* CUSTOM HOOK */

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart debe usarse dentro de un CartProvider");
    }

    return context;

}

/* PROVIDER */

export const CartProvider = ({ children }) => {

    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    /* Evalúa existencia. Devuelve booleano (some) */
    const isInCart = (item) => {
        const inCart = cart.some((element) => element.id === item.id);
        return inCart;
    };

    /* Vacía el carrito */
    const clearCart = () => {
        setCart([]);
    };

    /* Agregar al carrito */
    const addItem = (item, quantity) => {

        if (isInCart(item)) {
            const updatedCart = cart.map(product => {
                if (product.id === item.id) {
                    return { ...product, quantity: product.quantity + quantity };
                }
                else {
                    return product;
                }
            });

            setCart(updatedCart);
        }

        else {
            setCart(prevCart => [...prevCart, { ...item, quantity }]);
        }
    };

    /* Eliminar del carrito */

    const removeItem = (id) => {
        const updatedCart = cart.filter(element => element.id !== id);
        setCart(updatedCart);
    };

    /* Total de items en el carrito */
    const getTotalItems = () => {
        return cart.length;

    };

    /* Total a pagar */
    const getCartTotal = () => {
        return cart.reduce((acc, element) => acc + (element.price * element.quantity), 0);
    };

    /* Checkout */
    const checkout = () => {
        alert("Su compra ha sido realizada 🎉");
        clearCart();
        navigate("/");

    };

    const increaseQuantity = (id) => {
        setCart(cart.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            } else {
                return item;
            }
        }));
    };

    const decreaseQuantity = (id) => {
        setCart(cart.map(item => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            } else {
                return item;
            }
        }));
    };

    const values = { cart, addItem, clearCart, removeItem, getTotalItems, getCartTotal, checkout, increaseQuantity, decreaseQuantity };

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}

