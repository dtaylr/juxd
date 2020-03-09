import React from 'react'
import {IoMdCart} from 'react-icons/io'
import {add2Cart} from '../actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'
// import PropTypes from 'prop-types'

const Product = ({product}) => {

    const dispatch = useDispatch()
    
    const {title, price, isFreeShipping, foto} = product
    const items = useSelector(state => state.cart.cartItems)

    return (
        <div className='prod-container'>
            <div className="product">
                <h2 className='prod-title'>{title}</h2>
                <div id='prodImg-container'>
                    <img className='prodImg' src={foto} alt='featured pic'/>
                    <button className='btn-bag' onClick={()=> dispatch(add2Cart(items, product))}>
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
