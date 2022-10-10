import React from 'react';

import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import SearchBar from '../SearchBar/SearchBar';
import UserBar from '../UserBar/UserBar';

import './Header.scss';

function Header() {
	return (
		<header className='main-header'>
			<Logo />
			<NavBar />
			<SearchBar />
			<UserBar />
		</header>
	);
}
export default Header;
