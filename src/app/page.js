"use client"
import React from 'react'
import Breadcrumb from './components/Breadcrumb/breadcrumb'
import Footer from './components/Layouts/Footer'
import Hero from './components/Home/Hero'
import Aboutone from './components/About/Aboutone'
import Serviceone from './components/Service/Serviceone'
import Header from './components/Layouts/Header'
import  Contact from './components/Contact/contact'
import Abouttwo from './components/About/abouttwo'
import Aboutthree from './components/About/aboutthree'

export default function page() {
  return (
    <>
    <Header/>
  <Hero/>
  <Abouttwo/>
  <Aboutthree/>
  <Footer />

    {/* <Breadcrumb/> */}
    {/* <Contact/> */}
    {/* <Serviceone/> */}
    {/* <Aboutone/> */}
       

    </>
    
    
    
   
  
  )
}
