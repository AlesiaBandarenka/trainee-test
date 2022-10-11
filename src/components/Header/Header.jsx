import React from 'react';

import Logo from './Logo/Logo';
import NavBar from './NavBar/NavBar';
import SearchBar from './SearchBar/SearchBar';
import UserBar from './UserBar/UserBar';

import './Header.scss';

export function Header() {
	return (
		<header className='main-header'>
			<h1 class='visually-hidden'>Online beauty store</h1>
			<button class='main-header__menu-toggle' type='button'>
				<span class='visually-hidden'>Open menu</span>
				<span class='main-header__menu-toggle-bar'></span>
			</button>
			<Logo />
			<NavBar />
			<SearchBar />
			<UserBar />
		</header>
	);
}
