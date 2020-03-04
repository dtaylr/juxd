import React, {useState} from 'react'
import {MdMenu} from 'react-icons/md'
import {IoMdCart} from 'react-icons/io'
// import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const [isOpen, setisOpen] = useState(false);

    const toggleLinks = () =>{
        setisOpen(!isOpen)
    }

    return (
        <nav className='navbar'>
            <div className='navbar-center'>
                <span className='nav-icon'>
                    <MdMenu />
                </span>
                <a href='/'><h1>The Sto</h1> </a>
                <div className='cart-btn'>
                    <span className='nav-icon'>
                        <a href='/cart'>
                        <IoMdCart/>
                        </a>
                    </span>
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
