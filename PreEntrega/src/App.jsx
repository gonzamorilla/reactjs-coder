import './App.css'
import Navbar from "./Navbar/Navbar"
import ItemListContainer from './ItemListContainer/ItemListContainer'
import { useState, useEffect } from 'react'
import axios from "axios"
import ProductList from './ProductList/productList'
import { Route, Routes } from 'react-router-dom'
import ProductItem from './ProductItem/ProductItem'

function App() {
  const [productos, setProductos] = useState([])

  const getProductos = async () => {
    const res = await axios.get("https://fakestoreapi.com/products")
    setProductos(res.data)
  }

  useEffect(() => {
    getProductos()
  }, [])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer textH1="Bienvenidos a Visual Kings" />} />
        <Route path="/productos" element={<ProductList productos={productos} />} />
        <Route path="/productos/:id" element={<ProductItem productos={productos}/>} />
        <Route path="*" element={<h2>404 NOT FOUND</h2>} />
      </Routes>
    </div>
  )
}

export default App
