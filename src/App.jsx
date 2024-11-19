 import React from 'react'
import Header from './Componet'
import Home from './Componet/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './Componet/Footer' 
import PersonalProd from './Componet/PersonalProd'
import Navproduct from './Componet/Navproduct'
import CategoriesProduct from './Componet/CategoriesProduct'
import Card from './Componet/Card'
 
 
 
 
 
 const App = () => {
   return (
     <div>
        <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products/:id" element={<PersonalProd />} />
      <Route path="/Products" element={<Navproduct />} />
      <Route path='/categories/:name' element={<CategoriesProduct />} />
      <Route path='/cart' element={<Card/>}/>
      <Route path="*" element={ <div>404</div>} />
      </Routes>
     
        <Footer/>
     </div>
   )
 }
 
 export default App
 