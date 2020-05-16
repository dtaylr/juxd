import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
const middleware = [thunk]

 const saveToLocalStorage = state => {
	try{
	const serializedState = JSON.stringify(state)
	localStorage.setItem('state', serializedState)
	}catch(e){
	console.log(e)
	}
}

const loadFromLocalStorage = () => {
	try{
		const serializedState = localStorage.getItem('state')
		if(serializedState === null) return undefined
		return JSON.parse(serializedState)
	}catch(e){
		console.log(e)
		return undefined
	}
}

// const initialState = {};
// if(localStorage.getItem('cartItems')){
// 	initialState.cart = {cartItems: JSON.parse(localStorage.getItem('cartItems'))}
// }

//reducers(jsfunctions that take state and action) produce state of app

const persistedState = loadFromLocalStorage()

const store = createStore(
	rootReducer,
	persistedState,
	compose(
		applyMiddleware(...middleware),
		typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
		? a => a
		: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

store.subscribe(() => saveToLocalStorage(store.getState()))


export default store
