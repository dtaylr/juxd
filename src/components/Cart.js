import React, {useState} from 'react'
import {FaRegWindowClose,FaChevronUp, FaChevronDown } from 'react-icons/fa'

const Cart = () => {

    const [isClosed, setIsClosed] = useState(true)

    const closeCart =()=>{
        setIsClosed(!isClosed)
    }
    

    return (
        <div className='cart-overlay'>
            <div className='cart-slider'>
                <span className='close-cart' onClick={closeCart}>
                    <FaRegWindowClose />
                </span>
                    <h2>Your Cart</h2>
                    <div className='cart-content'>
                        <div className='cart-item'>
                            <p>Image</p>
                                {/* <img src='' alt='prod-image'/> */}
                            <h4>Prod Name</h4>
                            <h5>Prod Price</h5>
                            <span className='remove-item'>delete</span>
                        </div>            
                    <div>
                        <FaChevronUp/>
                            <p>Item Count</p>
                        <FaChevronDown/>
                    </div>
                </div>
                <div className='cart-footer'>
                <h3>Your Total:$ <span className='cart-total'>0</span></h3>     
                <button className='clear-cart btn-banner'>Clear Cart</button>
            </div>
            </div>
        </div>
    )
}

export default Cart
