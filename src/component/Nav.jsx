import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Nav = () => {
    const navigate = useNavigate()
  return (
    <div>
        Nav  <br />
         <Link to="/about-page">click</Link>
          <Outlet/>
   
    </div>
  
  )
}

export default Nav