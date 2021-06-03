import React from 'react'
import {Link} from 'react-router-dom'

const SideMenu = (menuToggler) => {
  return (
    <div className='mobile-menu-container'>
      <button className='menu-close'>
        <p onClick={menuToggler}>X</p>
      </button>
      <section className=''>
        <ul className='nav-links'>
          <li>
              <Link to='/' onClick={menuToggler}>Home</Link>
          </li>
          <li>
              <Link to='/products' onClick={menuToggler}>Products</Link>
          </li>
        </ul>
      </section>
      
    </div>
  )
}

export default SideMenu
