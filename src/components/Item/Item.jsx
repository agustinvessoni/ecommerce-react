import React from 'react'
import "./Item.css"

const Item = ({ name, price, image, children }) => {
  return (
    <article className="card">
      <img src={image} alt="imagen" />
      <h3 className='gold'>{name}</h3>
      <p className='card-price-item'>$ {price}</p>
      {children}
    </article>
  )
}

export default Item
