import Item from "../Item/Item"
import React from 'react'
import "./ItemList.css";
import { Link } from "react-router-dom";

const ItemList = ({ products }) => {

    if (!products.length) {
        return <p>No hay productos.</p>
    }

    return (
        <div className="products-container">
            {products.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                    <Item {...product} />
                </Link>
            ))}
        </div>
    );
}

export default ItemList
