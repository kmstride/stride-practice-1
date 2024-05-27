import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

function Main() {
  return (
    <div className='md:max-w-screen-lg mx-auto'>
      <Header />
      <Outlet />
    </div>
  )
}

export default Main
