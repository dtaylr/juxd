import * as types from '../types'
import products from '../data'

const api = products

export const getProds = () => dispatch =>{
    dispatch({type: types.GET_PRODUCTS, payload: api}) 
}
// const api = 'http://localhost:8000/products'
// export const getProds = ()=> dispatch =>{
//     console.log('fethcin')
//     fetch(api)
//     .then(res =>res.json())
//     .then(data => {
//         // return {type: GET_PRODUCTS, payload:data}
//         dispatch({type: types.GET_PRODUCTS, payload:data});
//     }
//     )
// }

export const filterHandler = (items, size) => dispatch =>{
    dispatch({type: types.FILTER_PRODUCTS_BY_SIZE, payload:{
        size: size,
        items: size === '' ? items: items.filter(a => a.availableSizes.indexOf(size.toUpperCase())>=0)
    }})
}

export const listProds = (items, sort) => dispatch =>{
    if(sort !== ''){
        items.sort((a,b) => (sort === 'lowest') ?
        (a.price > b.price ? 1: 1) : (a.price < b.price ? 1: -1));
    }else{
        items.sort((a,b)=> (a.id > b.id ? 1: -1))
    }
    return dispatch({type: types.FILTER_PRODUCTS_BY_PRICE, payload:{
        sort: sort,
        items: items
    }})
}

export const getDetails  = product => dispatch => {
   localStorage.setItem('pageDetails', JSON.stringify(product));
  return dispatch({type: types.GET_ITEM, payload: product})
}

export const addItem = count => dispatch =>{
    dispatch({type: types.INCREMENT, payload: count})
}

export const minItem = count => dispatch=>{
    dispatch({type: types.DECREMENT, payload: count})
}

