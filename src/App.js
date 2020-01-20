import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import {ProductContext} from './contexts/ProductContext';
import {CartContext} from './contexts/CartContext';
// import {useCart} from './hooks/useCart';

import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);
	// const [useCart, setUseCart] = useCart(cart);

	const addItem = (item) => {
		setCart([...cart, item]);
	};
	
	const removeItem = (itemId) => {
		const updateCart = cart.filter(item => item.id !== itemId);
		setCart(updateCart);
	}

	return (
		<div className="App">
			<ProductContext.Provider value={{products, addItem}}>
				<CartContext.Provider value={{cart, removeItem}}>
					<Navigation />
					<Route
						exact
						path="/"
						component={Products}
					/>
					<Route
						path="/cart"
						component={ShoppingCart}
					/>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
