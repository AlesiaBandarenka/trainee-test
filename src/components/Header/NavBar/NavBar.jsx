import React, { useState } from 'react';

import './NavBar.scss';
import './NavBarMobile.scss';

function NavBar() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<nav className='main-header__nav'>
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
			</nav>

			<div className='main-header__menu-toggle_container'>
				<button
					className='main-header__menu-toggle'
					type='button'
					onClick={() => setOpen(!open)}
				></button>
				{open && (
					<>
						<nav className='main-header__nav_mobile'>
							<ul className='nav__list_mobile'>
								<li className='nav__item_mobile'>
									<a className='nav__link_mobile' href='#'>
										Shop
									</a>
								</li>
								<li className='nav__item_mobile'>
									<a className='nav__link_mobile' href='#'>
										Products
									</a>
								</li>
								<li className='nav__item_mobile'>
									<a className='nav__link_mobile' href='#'>
										Sale
									</a>
								</li>
								<li className='nav__item_mobile'>
									<a className='nav__link_mobile' href='#'>
										Contact
									</a>
								</li>
							</ul>
						</nav>
					</>
				)}
			</div>
		</>
	);
}
export default NavBar;
