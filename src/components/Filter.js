import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {filterHandler, listProds} from '../actions/productActions'


const Filter = ({filteredProds, sort, size}) => {

    const dispatch = useDispatch()

    const items = useSelector(state=> state.products.items)
    
    return (
        <div className='filter'>
            <p>{`${filteredProds.length} items found`}</p>
        <div className='filterMenu'>
            <label>Order By
                <select className='selections' value={sort} onChange={(e) => dispatch(listProds(items, e.target.value))}>
                    <option value=''>Select</option>
                        <option value='lowestPrice'>Lowest to Highest</option>
                        <option value='highestPrice'>Highest to Lowest</option>
                </select>
            </label>
        </div>
        <div className='sizeSelections'>
            <label>Filter by Size
                <select className='selects' value={size} onChange={(e)=> dispatch(filterHandler(items, e.target.value))}>
                    <option value=''>ALL</option>
                    <option value='xs'>XS</option>
                    <option value='s'>S</option>
                    <option value='m'>M</option>    
                    <option value='l'>L</option>
                    <option value='xl'>XL</option>
                    <option value='xxl'>XXL</option>
                </select>
            </label>
        </div>
        </div>
    )
}

export default Filter
