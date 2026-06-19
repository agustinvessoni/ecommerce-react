import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Count from './components/Count/Count'

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer'
import { ProductSuccess } from './components/adminComponents/ProductSuccess'

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Cart/>} />
          <Route path='/admin' element={<ProductFormContainer/>}/>
          <Route path='/success/:id' element={<ProductSuccess/>}/>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
