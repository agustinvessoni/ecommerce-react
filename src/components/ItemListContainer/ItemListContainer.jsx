import React, { useState, useEffect } from 'react'
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setLoading(true);
    
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false)
      });
  }, []);

  if (loading) return <p>Cargando productos ...</p>

  return (
    <section>
      <ItemList products={products} />
    </section>
  )
}

export default ItemListContainer
