import React, {useState} from 'react'
// import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const [isOpen, setisOpen] = useState(false);

    const toggleLinks = () =>{
        setisOpen(!isOpen)
    }

    return (
        <div className='navbar'>
         {/* <button type="button" className='nav-btn' onClick={toggleLinks}/> */}
            <ul className={isOpen ? 'nav-links show-nav' : 'nav-links' }>
                <li>
                   <Link to='/'>Home</Link> 
                </li>
                <li>
                    <Link to='/products'>Products</Link>
                </li>  
                <li>
                    <Link to='/cart'>Cart</Link>
                </li>          
            </ul>
        </div>
    )
}

// Navbar.propTypes = {

// }

export default Navbar
