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
};

/* PROVIDER */
export const CartProvider = ({ children }) => {

    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    const MAX_QUANTITY = 10;

    /* Evalúa existencia */
    const isInCart = (item) => {
        return cart.some((element) => element.id === item.id);
    };

    /* Vaciar carrito */
    const clearCart = () => {
        setCart([]);
    };

    /* Agregar al carrito */
    const addItem = (item, quantity) => {

        if (isInCart(item)) {
            const updatedCart = cart.map(product => {
                if (product.id === item.id) {

                    const newQuantity = product.quantity + quantity;

                    return {
                        ...product,
                        quantity: newQuantity > MAX_QUANTITY
                            ? MAX_QUANTITY
                            : newQuantity
                    };
                }
                return product;
            });

            setCart(updatedCart);
        }

        else {
            setCart(prevCart => [
                ...prevCart,
                {
                    ...item,
                    quantity: quantity > MAX_QUANTITY ? MAX_QUANTITY : quantity
                }
            ]);
        }
    };

    /* Eliminar item */
    const removeItem = (id) => {
        const updatedCart = cart.filter(element => element.id !== id);
        setCart(updatedCart);
    };

    /* Total items */
    const getTotalItems = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    /* Total precio */
    const getCartTotal = () => {
        return cart.reduce(
            (acc, element) => acc + (element.price * element.quantity),
            0
        );
    };

    /* Checkout */
    const checkout = () => {
        alert("Su compra ha sido realizada 🎉");
        clearCart();
        navigate("/");
    };

    /* Aumentar cantidad */
    const increaseQuantity = (id) => {
        setCart(cart.map(item => {
            if (item.id === id) {
                if (item.quantity >= MAX_QUANTITY) return item;

                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        }));
    };

    /* Disminuir cantidad */
    const decreaseQuantity = (id) => {
        setCart(cart.map(item => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        }));
    };

    const values = {
        cart,
        addItem,
        clearCart,
        removeItem,
        getTotalItems,
        getCartTotal,
        checkout,
        increaseQuantity,
        decreaseQuantity
    };

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    );
};