import React, { useState, useEffect } from 'react'
import ItemList from "../ItemList/ItemList"
import { getByCategory, getProducts } from '../../services/productsService';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const {category} = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setLoading(true);
    
    getByCategory(category)
      .then((data) => setProducts(data))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false)
      });
  }, [category]);

  if (loading) return <p>Cargando productos ...</p>

  return (
    <section>
      <ItemList products={products} />
    </section>
  )
}

export default ItemListContainer
