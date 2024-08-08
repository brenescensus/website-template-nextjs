"use client"
import React from 'react'
import Breadcrumb from '@/app/components/Breadcrumb/breadcrumb'
import Footer from '@/app/components/Layouts/Footer'
// import Hero from './components/Home/Hero'
import Aboutone from '@/app/components/About/Aboutone'
import Serviceone from '@/app/components/Service/Serviceone'
import Header from '@/app/components/Layouts/Header'
import  Contact from '@/app/components/Contact/contact'


export default function ServicePage() {
  return (
    <>
    <Header/>
    <Breadcrumb/>
    {/* <Contact/> */}
    <Serviceone/>
    {/* <Aboutone/> */}
         <Footer/>

    </>
    
    
    // {/* <Hero/> */}
    
   
  
  )
}
