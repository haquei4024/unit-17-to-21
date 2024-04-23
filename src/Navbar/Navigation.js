import React from 'react'
import NavOption from './NavOption'
import SearchSignUp from './SearchSignUp'
import "./Navigation.css";

function Navigation() {
  return (
    <nav className='Navbar'>
      <h1 className='Logo'>GH</h1>
      <NavOption/> 
      <SearchSignUp />
    </nav>
  )
}

export default Navigation