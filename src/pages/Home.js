import React, {useEffect, useState} from 'react'
import {getProds} from '../actions/productActions'
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import {getDetails} from '../actions/productActions'
// import store2 from '../media/store.jpg'
import Product from '../components/Product'
// import { add2Cart } from '../actions/cartActions'

const Home = () => {

    //pass counter here
    const dispatch = useDispatch()

    const prods = useSelector(state => state.products.items)
    const [count, setCount] = useState(1)

    // const items = useSelector(state => state.cart.cartItems)

    useEffect(()=>{
        dispatch(getProds())
    }, [dispatch])

    return (
        <div id='main'>
          <header className='hero'>
            <div className='banner'>
                {/*component for Header */}
                <h1 className='banner-title'>New Collections</h1>
                <button className='btn-banner'>
                    <Link to='/products'>
                        See More
                    </Link>
                </button> 
            </div>
          </header>
          <h1 className='featHeading'>Featured</h1>
          <div className='featContainer'>
          <section className='featList'>
                {prods.slice(0,5).map(product=> ( 
                    <div 
                        key={product.id} 
                        className='prod'
                    >
                        <div className='products'>
                        <Product count={count} product={product}/>
                        </div>
                        <div className='featBtn-container'>
                            <button 
                                className='btn btn-view' 
                                onClick={()=> dispatch(getDetails(product))}>
                                    <Link to={`/products/${product.id}`}>View More</Link> 
                            </button>
                            {/* <button className='btn btn-feat' onClick={()=> dispatch(add2Cart(items, product))}>Add to Cart</button> */}
                        </div>
                   </div> )
                )}
          </section>
          </div>
    </div>   
    )
}

export default Home
