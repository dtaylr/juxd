import React, {useRef, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {add2Cart} from '../actions/cartActions'
import Counter from '../components/Counter';

const ProductDetail = () => {

    const dispatch = useDispatch()

    const skuRef = useRef()

    const [size, setSize] = useState()

    const [count, setCount] = useState(1)

    const lastPage = useSelector(state => state.products.hydrate)

    console.log(`This is the ${lastPage}`)
   
    const item = useSelector(state => state.products.prodId)

    const items = useSelector(state => state.cart.cartItems)

    const {sku, title, foto, description, availableSizes, price, id, isFreeShipping} = lastPage 

    //Search if add is in cart 
    const onChange = e => {
        setSize(e.target.value)
    }

    const handleChange = e => {
        setCount(parseInt(e.target.value))
    }

    return (
        <div id='prodDetailContainer'>
            <h1>{title}</h1>
            <section className='detailImgContainer'>
                <img 
                    className='detailFoto' 
                    src={foto} 
                    alt={title}
                />
            </section>
            <section className='prodDetails'>
                <h4>Product Details</h4>
                    <p className='description'>{description}</p>
                    <p className='detailPrice'>${price}</p>
                    <p className='detailShipping'>{isFreeShipping}</p>
                <Counter 
                    styles={{'padding': '20px'}}
                    count={count} 
                    id={id} 
                    handleChange={handleChange}
                />
                    <p className='detailSizeHeading'>Select Size</p>
                    <select 
                        id='sizeSelect' 
                        ref={skuRef} 
                        onChange={onChange}
                    >
                        <option value=''>
                            Size
                        </option>
                        {availableSizes.map((size) => (
                            <option 
                                key={id} 
                                value={size}>
                                    {size}
                            </option>)
                        )}
                    </select>
            </section>
             <button 
                onClick={()=> dispatch(add2Cart(items, item, count))}
                className='btn btn-feat'>Add to Cart
            </button>
        </div>
    )
}

// ProductDetail.propTypes = {

// }

export default ProductDetail
