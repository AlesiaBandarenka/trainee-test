import React from 'react';

import './Logo.scss';

import logoText from '../../assets/images/logo-text.png';
import fi_slack from '../../assets/images/fi_slack.png';

function Logo() {
	return (
		<a href='/' className='main-header_logo'>
			<img
				className='main-header_logo-image'
				src={fi_slack}
				alt='Logo pattern'
			/>
			<img className='main-header_logo-image' src={logoText} alt='Logo text' />
		</a>
	);
}
export default Logo;
