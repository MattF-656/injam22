import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

import OpacityIcon from '@mui/icons-material/Opacity';

import './navbar.css';

function Navbar() {
  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li>
        <a className={isActive ? "active" : ""}>
          <Link to={to} {...props}>{children}</Link>
        </a>
      </li>
    )
  }

  return (
    <nav className='Navbar'>
      <a><OpacityIcon sx={{ fontSize: 50 }}/></a>

      <ul id='nav'>
        <CustomLink to='/'>Home</CustomLink>
        <CustomLink to='/team-page'>Team</CustomLink>
        <CustomLink to='/admin-page'>Admin</CustomLink>
      </ul>
    </nav>
  )
}

export default Navbar