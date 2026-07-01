import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import WhereWeOperate from './components/WhereWeOperate'
import Contact from './components/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState(window.location.hash || '#home')

  useEffect(() => {
    const handleHashChange = () => setCurrentPage(window.location.hash || '#home')
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      {currentPage === '#home' && <Hero />}
      {currentPage === '#what-we-do' && <WhatWeDo />}
      {currentPage === '#where-we-operate' && <WhereWeOperate />}
      <Contact />
    </div>
  )
}

export default App
