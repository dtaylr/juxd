import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {add2Cart} from '../actions/cartActions'
// import { getDetails } from '../actions/productActions'
// import PropTypes from 'prop-types'
// import Counter from '../components/Counter';

const ProductDetail = () => {

    const dispatch = useDispatch()
   
    const item = useSelector(state => state.products.prodId)

    const items = useSelector(state => state.cart.cartItems)

    const {sku, title, foto, description, availableSizes, price, isFreeShipping} = item
    console.log(foto)

    // const flame  = 

    // useEffect(() => {
    //     localStorage.getItem()
    // }, [])

    return (
        <div id='prodDetailContainer'>
            <h1>{title}</h1>
            <section className='detailImgContainer'>
                <img className='detailFoto' src={foto} alt={title}/>
            </section>
            <section className='prodDetails'>
                <h4>Product Details</h4>
                    <p className='description'>{description}</p>
                    <p className='detailPrice'>${price}</p>
                    <p className='detailShipping'>{isFreeShipping}</p>
                    <p className='detailSizeHeading'>Select Size</p>
                    <article className='sizeSelector'>{availableSizes.map(size => (<li>{size}</li>))}
                </article>
               
                <p className='detailSKU'>SKU: {sku}</p>
            </section>
             {/* <Counter count={count}/> */}
             <button onClick={()=> dispatch(add2Cart(items, item))}className='btn btn-feat'>Add to Cart</button>
        </div>
    )
}

// ProductDetail.propTypes = {

// }

export default ProductDetail
