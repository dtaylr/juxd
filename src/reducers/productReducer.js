import * as types from '../types'

const initialState = {
    items:[],
    filteredItems: [],
    sort:'',
    size: '',
    prodId: {},
    hydrate: {}
 }

export default function (state = initialState, {payload,type}){
    switch(type){
        case types.GET_PRODUCTS:
            return{
                ...state,
                items: payload,
                filteredItems: payload
            }
        case types.FILTER_PRODUCTS_BY_SIZE:
                return{
                    ...state, 
                    filteredItems: payload.items,
                    size: payload.size
                }
        case types.FILTER_PRODUCTS_BY_PRICE:
                return{
                    ...state, 
                    filteredItems: payload.items,
                    sort: payload.sort
                }
        case types.GET_ITEM:
            return{
                ...state,
                // prodId: console.log(payload)
                prodId: payload,
                hydrate: payload
            }
        case types.REHYDRATE:
            return{
                ...state,
                hydrate: payload
            }
        case types.INCREMENT:
            return{
                ...state,
                count: payload
            }
        case types.DECREMENT:
            return{
                ...state,
                count: payload
            }
            default:
                return state;
    }  
}