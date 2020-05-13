import React, {useEffect} from 'react'
import {MdMenu} from 'react-icons/md'
import {IoMdCart} from 'react-icons/io'
import {getCart} from '../actions/cartActions'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import Cart from './Cart'
// import PropTypes from 'prop-types'


const Navbar = () => {
    
        let cartMini = useSelector(state => state.cart.cartItems.length)
        let cartMem = JSON.parse(localStorage.getItem('cartItems')) || []

        const dispatch = useDispatch();

        // const cartCheck = (cartTest) => {
        //     let cartMem = JSON.parse(localStorage.getItem('cartItems'))
        //     if (cartMem) { //always ask if exist the localStorage =D
        //          cartTest = cartMem.length
        //         }else{
        //             cartTest = []
        //         }
        //         return cartTest
        // }

    
    useEffect(()=>{
        dispatch(getCart(cartMem))
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
