import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom'
import {getProds} from '../actions/productActions'
// import {add2Cart} from '../actions/cartActions';
import {getDetails} from '../actions/productActions';
// import PropTypes from 'prop-types'
import Product from '../components/Product';
import Filter from '../components/Filter';


const Products = () => {

    const dispatch = useDispatch()

    const filteredProds = useSelector(state => state.products.filteredItems);
    const size = useSelector(state => state.products.size)
    const sort = useSelector(state => state.products.sort)
    // const items = useSelector(state => state.cart.cartItems)

    useEffect(()=>{
        dispatch(getProds())
    }, [dispatch])
    
    return (
        <div id='productsWrapper'>
            <div className='filterContainer'>   
                <Filter 
                    sort={sort} 
                    size={size} 
                    filteredProds={filteredProds}
                />
            </div>
            <h2 className='products-title'>All Products</h2>
        <section className="prodContainer">
        {filteredProds.map(product => (
            <div key={product.id}>
                <Product product={product}/>
                <div className='featBtn-container'>
                    <button 
                        className='btn btn-view' 
                        onClick={()=> dispatch(getDetails(product))}>
                            <Link 
                                to={{pathname:`/products/${product.id}`}}>View More
                            </Link>
                    </button>
                    {/* <button className='btn btn-feat' onClick={()=> dispatch(add2Cart(items, product))}>Add to Cart</button> */}
                </div>
            </div>))}
        </section>
        </div>
        
    )
}

Products.propTypes = {

}

export default Products
