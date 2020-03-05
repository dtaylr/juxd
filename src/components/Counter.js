import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addItem, minItem} from '../actions/productActions'

const Counter = ({count, price}) => {

    const dispatch = useDispatch()

    const updated = (update)=>{
        console.log(update)
    }
    return (
        <div className='counter'>
            <label htmlFor='counter'>Quantity: </label>
            <select id='quant' value={count} onChange={(e) => dispatch(addItem(price, e.target.value))}>
                <option value={count}>1</option>
                <option value={count}>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
            </select>
            
            {/* <button onClick={()=> dispatch(addItem(count+1))}> + </button>
                {count}
            <button onClick={()=> dispatch(minItem(count-1))}> - </button> */}
        </div>
    )
}

export default Counter
