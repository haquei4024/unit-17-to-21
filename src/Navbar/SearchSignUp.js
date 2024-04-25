import React from 'react'
import { MagnifyingGlass } from 'phosphor-react'
import './SearchSignUp.css'

function SearchSignUp() {
  return (
    <ul className='SearchSign'>
        <li>
            <MagnifyingGlass size={25} />
        </li>
        <li>SIGN UP</li>
    </ul>
  )
}

export default SearchSignUp