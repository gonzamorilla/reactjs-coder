import React from 'react';
import './App.css'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './Footer/Footer'
import db from '../db/firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import Navbar from "./Navbar/Navbar"
import ItemListContainer from './ItemListContainer/ItemListContainer'
import ProductList from './ProductList/productList'
import ProductItem from './ProductItem/productItem'
import Checkout from './Checkout/checkout'
import ProductContextProvider from './ProductContextProvider/productContext'
import Thankyou from './Thankyou/Thankyou'

function App() {
  const [productos, setProductos] = useState([])
  const productosCollectionRef = collection(db, "Items")

  const getProductos = async () => {
    const productosCollection = await getDocs (productosCollectionRef)
    setProductos(
      productosCollection.docs.map((doc) => ({...doc.data(), id: doc.id}))
    )
  }

  useEffect(() => {
    getProductos()
  }, [])

  return (

    <ProductContextProvider>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer textH1="Bienvenidos a Visual Kings" />} />
        <Route path="/productos" element={<ProductList productos={productos} />} />
        <Route path="/productos/:id" element={<ProductItem productos={productos}/>} />
        <Route path="*" element={<h2>404 NOT FOUND</h2>} />
        <Route path="/check-out" element={<Checkout productos={productos}/>} />
        <Route path="/thankyou-page" element={<Thankyou productos={productos}/>} />
      </Routes>
      <Footer />
    </div>
    </ProductContextProvider>
  )
}

export default App
