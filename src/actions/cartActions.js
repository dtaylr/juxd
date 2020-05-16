import * as types from '../types'

export const getCart = cartMem => dispatch=>{
    dispatch({type: types.GET_CART, payload: cartMem})
}

// export const openCart =()=> dispatch=>{
//     dispatch({type: types.OPEN_CART, payload: })
// }

export const add2Cart = (items, product) => dispatch =>{
   const cartItems = items.slice();

    let prodInCart = false;
        cartItems.forEach(item => {
            if(item.id === product.id){
                prodInCart = true;
                item.count++;
            }
        });
        if(!prodInCart){
            cartItems.push({...product, count: 1});
        }
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        alert(`Added ${product.title} to cart!`)
        return dispatch({type: types.ADD_TO_CART, payload:{
            cartItems: cartItems
        }
    })
}


export const removeFromCart = (items, product) => dispatch =>{
    const cartItems = items.filter(elm=> elm.id !== product.id)
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    alert(`Removed ${product.title} to cart!`)
    return dispatch({type: types.REMOVE_ITEM, payload:{
        cartItems
    }})
}

export const addItem = (count, price) => dispatch =>{
    console.log('plus')
    const newPrice = count * price
    console.log(newPrice)
    dispatch({type: types.INCREMENT, payload: newPrice})
}

export const checkOut = cart => dispatch =>{
    dispatch({type: types.CHECKOUT, payload: cart})
}