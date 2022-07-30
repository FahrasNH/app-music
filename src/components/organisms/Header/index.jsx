import React from 'react'
import { useNavigate } from 'react-router-dom'
import ICONS from '../../../constants/icons'

const Header = ({ onClickSearch }) => {
  const navigate = useNavigate()
  return (
    <header className="headerComponent">
      <img className="h-4 w-4" src={ICONS.icMenu} alt="icMenu" />
      <img src={ICONS.icNgMusic} alt="ic" onClick={() => navigate('/')} />
      <img
        className="h-4 w-4 cursor-pointer"
        src={ICONS.icSearch}
        alt="icSearch"
        onClick={onClickSearch}
      />
    </header>
  )
}

export default Header
