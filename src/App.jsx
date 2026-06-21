import './App.css'

import Count from './components/Count/Count'

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { Navigate, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer'
import { ProductSuccess } from './components/adminComponents/ProductSuccess'
import { PublicLayout } from './layouts/PublicLayout'
import { AdminLayout } from './layouts/AdminLayout'
import { Dashboard } from './components/adminComponents/Dashboard/Dashboard'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { Login } from './components/Login/Login'

function App() {

  return (
    <>

      <Routes>

        {/* RUTAS PÚBLICAS */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Cart />} />
        </Route>


        <Route path='/admin/login' element={<Login />} />

        {/* ADMIN */}
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute> 
              <AdminLayout /> 
            </ProtectedRoute>
            }
          >
          <Route index element={<Navigate to={"dashboard"} />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='products/new' element={<ProductFormContainer />} />
          <Route path='products/success/:id' element={<ProductSuccess />} />
        </Route>

      </Routes>

    </>
  )
}

export default App
