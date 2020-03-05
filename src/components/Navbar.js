import React, {useState} from 'react'
import {MdMenu} from 'react-icons/md'
import Cart from './Cart'
import {IoMdCart} from 'react-icons/io'
// import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const [isOpen, setisOpen] = useState(false);

    const toggleOpen = () =>{
        setisOpen(!isOpen)
    }

    return (
        <nav className='navbar'>
            <div className='navbar-center'>
                <span className='nav-icon'>
                    <MdMenu />
                </span>
                <Link to='/'>
                    <h1>The Sto</h1>
                </Link>
                <div className='cart-btn' onClick={toggleOpen}>
                    {isOpen ? <Cart />: <span className='nav-icon'>
                        {/* <Link to='/cart'> */}
                            <IoMdCart/>
                        {/* </Link> */}
                    </span> }
                    <div className='cart-items'>0</div>
                </div>
            </div>
        </nav>
        // <section className='navbar'>
        //     <div className='navbar-center'>
        //         {/* <button type="button" className='nav-btn' onClick={toggleLinks}/> */}
        //         <ul className={isOpen ? 'nav-links show-nav' : 'nav-links' }>
        //         <li>
        //            <Link to='/'>Burger</Link> 
        //         </li>
        //         <li>
        //             <Link to='/products'>Logo</Link>
        //         </li>  
        //         <li>
        //             <Link to='/cart'>Cart</Link>
        //         </li>          
        //     </ul>
        //     </div>
        // </section>
    )
}

// Navbar.propTypes = {

// }

export default Navbar
