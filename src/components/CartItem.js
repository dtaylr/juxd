import React from 'react'
import Counter from './Counter'
import { useDispatch } from 'react-redux'
import {add2Cart, removeFromCart} from '../actions/cartActions';

const CartItem = ({product, items}) => {

    const dispatch = useDispatch()

    const {count, title, price, foto, isFreeShipping} = product

    let upPrice = count * price
 
    return (
        <div className='cartItem'>
           <div className='cartItemDeets'>
            <div className='cartImageContainer'>
                <img className='cartImage' src={foto} alt='cart pic'/>
                <h3 className='cartItemTitle'>{title}</h3>
            </div>
            <div className='cartShipInfo'>
                {isFreeShipping ? (<p>Free Shipping</p>) : <p>Added at checkout</p> }
                    <div className='cartItem-price-and-quant'>
                     <span>{count} <span>x</span> ${upPrice}</span>
                    </div>        
                <div className='cartBtnContainer'>
                    <Counter price={price} count={count}/>
                <button className='btn btn-alert' onClick={()=>dispatch(removeFromCart(items, product))}>Delete</button>
            </div> 
            </div>
           </div>
        </div>
    )
}

export default CartItem
