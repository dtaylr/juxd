import React, {useEffect} from 'react'
// import {Link} from 'react-router-dom'
// import PropTypes from 'prop-types'
import CartItem from '../components/CartItem'
import { useSelector, useDispatch } from 'react-redux'
import {checkOut} from '../actions/cartActions'

const Cart = () => {

    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.cartItems)

    let cartMem = JSON.parse(localStorage.getItem('cartItems')); // get the data

    const formatCurrency = num => {
        return '$' + Number(num.toFixed(2)).toLocaleString() + ' ';
    }

    // useEffect(()=>{
        // dispatch(getCart(cartMem))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [dispatch])

    let subTotal = cartMem.reduce((a,c)=> a + c.price * c.count, 0)
    
    let tax = subTotal * 0.08

    let total = subTotal + tax

    let cartTaxTotal = formatCurrency(tax)
    let cartSubTotal= formatCurrency(subTotal)
    let cartTotal = formatCurrency(total)   

    return (
        <div id='wrapper'>
            <section className='cart'>
                {!cartMem.length ? (<p className='empty-cart'>Cart is Empty</p>): 
                (<p className='cartHeader'>You have <span className='cartCount'>{cartMem.length}</span> product(s) in your cart<hr/></p>)
                    }
                    {cartMem.length && cartMem.map(item=> 
                        <div key={item.id} className='cartItems'>
                            <CartItem product={item} items={items} />
                        </div>
                    )}
                    {cartMem.length === 0 || null ? null : <>
                      <section className='totals'>
                                <li><span>Sub Total:</span> {cartSubTotal}</li>
                                <li><span>Tax: </span> {cartTaxTotal}</li>
                                <li><span>Total: </span> {cartTotal}</li>
                            </section>
                            <button className='btn btn-chkout' onClick={()=> dispatch(checkOut(items))}>Checkout</button> 
                        </>}
            </section>
        </div>
       
    )
}

// Cart.propTypes = {

// }

export default Cart
