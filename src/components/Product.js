import React from 'react'
import {IoMdCart} from 'react-icons/io'
// import {Link} from 'react-router-dom'
// import PropTypes from 'prop-types'
// import { useDispatch } from 'react-redux'

const Product = ({product}) => {
    
    const {title, price, isFreeShipping, foto} = product

    return (
        <div className='prod-container'>
            <div className="product">
                <h2 className='prod-title'>{title}</h2>
                <div id='prodImg-container'>
                    <img className='prodImg' src={foto} alt='featured pic'/>
                    <button className='btn-bag'>
                        <IoMdCart/>
                        Bag It</button>
                </div>
                <div className='price-ship-desc'>
                    <p className='prod-price'>${price}</p>
                    {isFreeShipping ? <p>Free Shipping</p> :<p><span className='shipSpan'>+</span> Shipping</p>}
                </div>
            </div>
        </div>
    )
}

// Product.propTypes = {

// }

export default Product
