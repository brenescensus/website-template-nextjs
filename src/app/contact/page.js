"use client"
import React from 'react'
import Breadcrumb from '@/app/components/Breadcrumb/breadcrumb'
import Footer from '@/app/components/Layouts/Footer'
// import Hero from './components/Home/Hero'
import Aboutone from '@/app/components/About/Aboutone'
import Serviceone from '@/app/components/Service/Serviceone'
import Header from '@/app/components/Layouts/Header1'
import  Contact from '@/app/components/Contact/contact'


export default function ContactPage() {
  return (
    <>
    <Header/>
    <Breadcrumb active_menu="Get in touch "  title="Contact Us"/>
    <Contact/>
   
         <Footer/>

    </>
    
    
    
    
   
  
  )
}
