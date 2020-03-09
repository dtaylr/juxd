import React from 'react'
import {MdMenu} from 'react-icons/md'
import {IoMdCart} from 'react-icons/io'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
// import Cart from './Cart'
// import PropTypes from 'prop-types'


const Navbar = () => {

    const cartMini = useSelector(state => state.cart.cartItems.length)

    console.log(cartMini)

    // let cartMem = JSON.parse(localStorage.getItem('cartItems')); // get the data
    // console.log(cartMem)

    // const [isOpen, setisOpen] = useState(false);

    // const openCart = () =>{
    //     setisOpen(true)
    // }

    // const closeCart =()=>{
    //     setisOpen(false)
    // }

    // useEffect(()=>{
    //     dispatch(getCart(cartMem))
    //     // console.log(cartMem)
    // }, [dispatch])

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
