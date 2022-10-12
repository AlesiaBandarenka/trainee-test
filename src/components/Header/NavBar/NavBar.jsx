import React from 'react';

import './NavBar.scss';

function NavBar() {
	return (
		<nav className='main-header__nav'>
			<div className='nav__container'>
				<ul className='nav__list'>
					<li className='nav__item'>
						<a className='nav__link' href='#'>
							Shop
						</a>
					</li>
					<li className='nav__item'>
						<a className='nav__link' href='#'>
							Products
						</a>
					</li>
					<li className='nav__item'>
						<a className='nav__link' href='#'>
							Sale
						</a>
					</li>
					<li className='nav__item'>
						<a className='nav__link' href='#'>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
export default NavBar;
