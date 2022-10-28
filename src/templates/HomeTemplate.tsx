import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

type Props = {}

export default function HomeTemplate({}: Props) {
  return (
    <div className='container'>
        <Header />
            <Outlet />
        <Footer />
    </div>
  )
}