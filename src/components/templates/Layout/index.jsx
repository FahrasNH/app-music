import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Backdrop from '../../molecules/Backdrop'
import Header from '../../organisms/Header'

const Layout = ({ children }) => {
  const location = useLocation()
  const [showBackdropSearch, setShowBackdropSearch] = useState(false)

  const handleShowSearch = () => {
    setShowBackdropSearch(true)
  }

  const handleCloseSearch = () => {
    setShowBackdropSearch(false)
  }

  return (
    <main className="overflow-x-hidden w-[35%] m-auto allMobile:w-full sm:w-full md:w-full h-screen shadow-lg">
      {location.pathname.includes('/list-music') && (
        <Header onClickSearch={handleShowSearch} />
      )}
      {showBackdropSearch && (
        <Backdrop
          onClick={handleCloseSearch}
          setShowBackdropSearch={setShowBackdropSearch}
        />
      )}
      {children}
    </main>
  )
}

export default Layout
