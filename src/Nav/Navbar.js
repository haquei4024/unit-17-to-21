import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { MagnifyingGlass, List} from 'phosphor-react';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav>
        <div className='Desktop'>    
            <Link to="/" className='Title'>
                GH
            </Link>
            <div className='HamMenu' onClick={() => {setMenuOpen(!menuOpen)}}>
                <List size={30}/>
            </div>
            <ul className='Pages'>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/stories">Stories</NavLink>
                </li>
                <li>
                    <NavLink to="/calendar">Calendar</NavLink>
                </li>
            </ul>
            <ul className='SignUps'>
                <li><MagnifyingGlass size={20} /></li>
                <li className='ButtonSign'> SIGN UP</li>
            </ul>
        </div>
        <ul className={menuOpen ? "MobileMenuOpen" : "MobileMenuClose"}>
            <li>Home</li>
            <li>Stories</li>
            <li>Calendar</li>
        </ul>
    </nav>
  )
}
