import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css"

const Cart = () => {
    const { cart, removeItem, clearCart, getCartTotal, checkout } = useCart();

    // Renderizado condicional si el carrito está vacío
    if (cart.length === 0) {
        return (
            <div className="cart-empty-container">
                <h2 className="cart-empty-title">Tu Carrito está vacío 🛒</h2>
                <p className="cart-empty-text">¿No sabés qué comprar? ¡Mirá nuestros productos!</p>
                <Link to="/" className="btn-back-to-shop gold">
                    Volver a la tienda
                </Link>
            </div>
        );
    }

    // Renderizado del listado de productos
    return (
        <div className="cart-main-container">
            <h2 className="cart-main-title">Detalle de tu compra</h2>

            <div className="cart-items-list">
                {cart.map((item) => (
                    <div key={item.id} className="cart-item-card">
                        <div className='item-cart-img'>
                            <img src={item.image} alt="imagen" />
                        </div>
                        <div className="cart-item-info">
                            <h4 className="cart-item-name">{item.name}</h4>
                            <p className="cart-item-price">Precio: $ {item.price}</p>
                            <button onClick={() => removeItem(item.id)} className="btn-delete-item btn">
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="cart-summary-container">
                <h3 className="cart-total-text">Total: <span className="cart-total-amount">$ {getCartTotal()}</span></h3>

                <div className="cart-action-buttons">
                    <button onClick={clearCart} className="btn-clear-cart btn">
                        Vaciar Carrito
                    </button>
                    <button onClick={checkout} className="btn-checkout-cart btn">
                        Finalizar Compra
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;