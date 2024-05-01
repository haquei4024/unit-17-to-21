import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { MagnifyingGlass} from 'phosphor-react';
import { Dropdown } from './Dropdown';

export const Navbar = () => {
  return (
    <nav>
        <Link to="/" className='Title'>
            GH
        </Link>
        <Dropdown />
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
    </nav>
  )
}
