import * as types from '../types'

const initialState = {
    cartItems: [],
    addedItem: [],
    subTotal: 0,
    tax: 0,
    total: 0,
}

export default function (state = initialState, {type, payload}){
    switch(type){
        case types.ADD_TO_CART:
            return{
                cartItems: payload.cartItems
            }
        case types.REMOVE_ITEM:
            return{
                cartItems: payload.cartItems
            }
        case types.INCREMENT:
            return{
                ...state,
                cartItems: console.log(payload)
            }
        case types.GET_CART:
            return{
                ...state,
                cartItems: payload,
            }
        case types.TOTAL_UP:
            return{
                ...state,
                payload: payload
            }
            default:
                return{
                    ...state
                }
    }

}