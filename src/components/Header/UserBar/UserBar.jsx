import React from 'react';

import PropTypes from 'prop-types';

import './UserBar.scss';

function UserBar(productsInCart) {
	const productsCounter = productsInCart.productsInCart.productsInCart;

	return (
		<ul className='user-nav'>
			<li className='user-nav__item'>
				<a className='user-nav__link user-nav__link--favorites' href='#'>
					<span className='visually-hidden'>Favourite</span>
				</a>
			</li>
			<li className='user-nav__item'>
				{productsCounter !== 0 && (
					<div className='user-nav__link user-nav__link--cart-add'>
						<p className='user-nav__link user-nav__link--cart-number'>
							{productsCounter}
						</p>
					</div>
				)}
				<a className='user-nav__link user-nav__link--cart' href='#'>
					<span className='visually-hidden'>Shopping cart</span>
				</a>
			</li>
		</ul>
	);
}
export default UserBar;

UserBar.propTypes = {
	productsInCart: PropTypes.number,
};
