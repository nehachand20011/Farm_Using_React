import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Product from './components/Product'





const MyRoutes = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/nav'element={<Navbar/>}/>
        <Route path='/'element={<Home/>}/>
        <Route path='/footer'element={<Footer/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/services'element={<Services/>}/>
        <Route path='/contact'element={<Contact/>}/>
        <Route path='/product'element={<Product/>}/>



        

        


    </Routes>
    </BrowserRouter>
    </>
  )
}

export default MyRoutes