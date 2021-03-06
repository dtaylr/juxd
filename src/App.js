
import React from 'react';
import './App.scss';
import {Provider} from 'react-redux'
import Home from './pages/Home';
import store from './store'
import Cart from './pages/Cart'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail';
import { Switch, Route } from 'react-router';
import Navbar from './components/Navbar';
import Scroll from './components/Scroll';
// import { PersistGate } from 'redux-persist/integration/react';
// import Footer from './components/Footer';


function App() {
  return (
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <Scroll/>  
          <Navbar/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path='/products' component={Products}/>
              <Route exact path="/products/:prodId" component={ProductDetail}/>
              <Route exact path="/cart" component={Cart}/>
            </Switch>
        {/* <Footer/> */}
        {/* </PersistGate> */}
      </Provider>
  );
}

export default App;
