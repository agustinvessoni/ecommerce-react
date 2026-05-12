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
    const addItem = (item) => {
        if (isInCart(item)) {
            alert("El producto ya existe en el carrito.");
            return
        }

        setCart([...cart, item]);
        alert("Producto agregado al carrito ✅");
    };

    /* Eliminar del carrito */
    const removeItem = (id) => {
        const updatedCart = cart.filter(element => element.id !== id);
        setCart(updatedCart);
        alert("Producto eliminado ✅")
    };

    /* Total de items en el carrito */
    const getTotalItems = () => {
        return cart.length;
    };

    /* Total a pagar */
    const getCartTotal = () => {
        return cart.reduce((acc, element) => acc + element.price, 0);
    };

    /* Checkout */
    const checkout = () => {
        alert("Su compra ha sido realizada 🎉");
        clearCart();
        navigate("/");
    };


    const values = { addItem, clearCart, removeItem, getTotalItems, getCartTotal, checkout };

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}