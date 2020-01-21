import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {CartContext} from '../contexts/CartContext';

const Navigation = () => {
	const {cart} = useContext(CartContext);
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				<p>Cart <span>{cart.length}</span></p>
			</NavLink>
		</div>
	);
};

export default Navigation;
