import React from 'react';

import './NavBar.scss';

function NavBar() {
	return (
		<nav class='main-header__nav'>
			<div class='nav__container'>
				<ul class='nav__list'>
					<li class='nav__item'>
						<a class='nav__link' href='#'>
							Shop
						</a>
					</li>
					<li class='nav__item'>
						<a class='nav__link' href='#'>
							Products
						</a>
					</li>
					<li class='nav__item'>
						<a class='nav__link' href='#'>
							Sale
						</a>
					</li>
					<li class='nav__item'>
						<a class='nav__link' href='#'>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
export default NavBar;
