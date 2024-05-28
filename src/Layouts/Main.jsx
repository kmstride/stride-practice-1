import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Main() {
  return (
    <div className='md:max-w-screen-lg mx-auto'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Main
