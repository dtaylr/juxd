import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {getDetails} from '../actions/productActions'
import { useDispatch } from 'react-redux'

const Product = ({product}) => {
    
    const {title, price, isFreeShipping, foto} = product

    return (
        <div className='prod-container'>
            <div className="product">
                <h2 className='prod-title'>{title}</h2>
                <div id='prodImg-container'>
                    <img className='prodImg' src={foto} alt='featured pic'/>
                </div>
                <div className='price-ship-desc'>
                    <p className='prod-price'>${price}</p>
                    {isFreeShipping ? <p>Free Shipping</p> :<p><span className='shipSpan'>+</span> Shipping</p>}
                </div>
            
            </div>
        </div>
    )
}

Product.propTypes = {

}

export default Product
