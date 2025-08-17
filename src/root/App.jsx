import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../shared/Header.jsx'
import Footer from '../shared/Footer.jsx'

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main role="main" className="site-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}


