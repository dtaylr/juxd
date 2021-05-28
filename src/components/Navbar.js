import React, {useEffect} from 'react'
import {MdMenu} from 'react-icons/md'
import {IoMdCart} from 'react-icons/io'
import {getCart} from '../actions/cartActions'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import PropTypes from 'prop-types'


const Navbar = () => {
    
    let currentCart = useSelector(state => state.cart.cartItems)

    let cartMem = JSON.parse(localStorage.getItem('cartItems')) || []

    let cartMini = currentCart.reduce((a,c) => a += c.count, 0);

    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getCart(cartMem)) //for nav count
    }, [])

    return (
        <nav className='navbar'>
            <div className='navbar-center'>
                <span className='nav-icon'>
                    <MdMenu />
                </span>
                <Link to='/'>
                    <h1>Shopper</h1>
                </Link>
                <div className='cart-btn'>
                    {/* {isOpen ? <Cart />: */}
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

// Navbar.propTypes = {

// }

export default Navbar
