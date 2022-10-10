import React from 'react';

import './UserBar.scss';
import '../NavBar/NavBar.scss';

function UserBar() {
	return (
		<ul class='user-nav'>
			<li class='user-nav__item'>
				<a class='user-nav__link user-nav__link--favorites' href='#'>
					<span class='visually-hidden'>Favourite</span>
				</a>
			</li>
			<li class='user-nav__item'>
				<a class='user-nav__link user-nav__link--cart' href='#'>
					<span class='visually-hidden'>Shopping cart</span>
				</a>
			</li>
		</ul>
	);
}
export default UserBar;
