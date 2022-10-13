import React from 'react';

import './ToggleBar.scss';

export function ToggleBar() {
	return (
		<button className='main-header__menu-toggle' type='button'>
			<span className='visually-hidden'>Open menu</span>
			<span className='main-header__menu-toggle-bar'></span>
		</button>
	);
}
