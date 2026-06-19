import React, { useState } from 'react'
import Item from '../Item/Item';
import "./ItemDetail.css"
import { useCart } from '../../context/CartContext';
import Count from '../Count/Count';

const ItemDetail = ({ item }) => {

  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (count) => {
    setQuantity(count);
  }

  const handleAddToCart = () => {
    addItem(item, quantity);
    alert("Producto agregado al carrito ✅");
  };

  return (
    <article className='item-detail-container'>
      <div className='item-detail-img'>
        <img src={item.image} alt="imagen" />
      </div>

      <div className='item-detail-info'>
        <h1 className='gold'>{item.name}</h1>
        <p>{item.description}</p>
        <h2 className='gold item-detail-price'>$ {item.price}</h2>

        <button className="btn" onClick={handleAddToCart}>
          Agregar al carrito
        </button>

        <Count initial={1} onAdd={handleQuantityChange} />
      </div>
    </article>
  );
}

export default ItemDetail
