import React, {useEffect, useState} from 'react'
import {MdMenu} from 'react-icons/md'
import {IoMdCart} from 'react-icons/io'
import {getCart} from '../actions/cartActions'

import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import SideMenu from './SideMenu'
// import PropTypes from 'prop-types'


const Navbar = () => {
    
    let currentCart = useSelector(state => state.cart.cartItems)

    let cartMem = JSON.parse(localStorage.getItem('cartItems')) || []

    let cartMini = currentCart.reduce((a,c) => a += c.count, 0);

    const dispatch = useDispatch();

    const [open, setIsOpen] = useState(false)

    const menuToggler = () => {
        setIsOpen(!open)
    }

    let mobile = window.innerWidth < '900px';


    useEffect(()=>{
        dispatch(getCart(cartMem)) //for nav count
    }, [])

    return (
        <nav id='nav-container'>
            <div className='navbar-center'>
                <button 
                    className='nav-btn' 
                    onClick={menuToggler}
                >
                    <MdMenu className='nav-icon'/>
                </button>
                {mobile || open ? 
                    <ul 
                        onClick={menuToggler}  
                        className='mobile-menu-container'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/products'>Products</Link>
                        </li> 
                    </ul> : <ul 
                        className='nav-links'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/products'>Products</Link>
                        </li>
                    </ul>
                }
                {/* <Link to='/'>
                    <h1>Shopper</h1>
                </Link> */}
                <div className='cart-btn'>
                         <span className='nav-icon'> 
                        <Link to='/cart'>
                            <IoMdCart className='cart-logo'/>
                        </Link>
                    </span> 
                    {cartMini === 0 ? null : <div className='cart-items'>{cartMini}</div>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
// Navbar.propTypes = {

// }

