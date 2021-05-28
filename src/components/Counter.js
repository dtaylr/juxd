import React, {useRef} from 'react'
import {useDispatch} from 'react-redux'
import {addItem} from '../actions/productActions'

const Counter = ({count, price, handleChange, id}) => {


    const dispatch = useDispatch()
    const quantRef = useRef()

    console.log(quantRef)

    let arr = []
    let maxOpts = 10

    for (let i = 1; i <= maxOpts; i++) {
            arr.push(i)
        }

    return (
        <div id='counter'>
            <label htmlFor='counter'>Quantity: </label>
                <select 
                    id={id} 
                    value={count} 
                    ref={quantRef}
                    onChange={handleChange}
                    className='quant-picker'
                    // onChange={(e) => dispatch(addItem(price, e.target.value))}
                >
                    {arr.map(option => (
                        <option 
                            value={option} 
                            key={option}
                        >
                            {option}
                        </option>
                ))}
                </select>
            {/* <button onClick={()=> dispatch(addItem(count+1))}> + </button>
                {count}
            <button onClick={()=> dispatch(minItem(count-1))}> - </button> */}
        </div>
    )
}

export default Counter
