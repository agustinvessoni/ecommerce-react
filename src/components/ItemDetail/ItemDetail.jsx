import React from 'react'
import Item from '../Item/Item';
import "./ItemDetail.css"
import { useCart } from '../../context/CartContext';

const ItemDetail = ({ item }) => {

  const {addItem} = useCart();

  return (
    <article className='item-detail-container'>
      <div className='item-detail-img'>
        <img src={item.image} alt="imagen" />
      </div>

      <div className='item-detail-info'>
        <h1 className='gold'>{item.name}</h1>
        <p>{item.description}</p>
        <h2 className='gold item-detail-price'>$ {item.price}</h2>
        <button className="btn" onClick={() => addItem(item)}>Agregar al carrito</button>
      </div>
    </article>
  );
}

export default ItemDetail
