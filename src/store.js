  
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
const middleware = [thunk]

const initialState = {};
if(localStorage.getItem('cartItems')){
	initialState.cart ={items: JSON.parse(localStorage.getItem('cartItems'))}
}
//reducers(jsfunctions that take state and action) produce state of app
const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(...middleware),
		typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
		? a => a
		: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

export default store