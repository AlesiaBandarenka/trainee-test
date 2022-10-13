import React from 'react';

import Logo from './Logo/Logo';
import NavBar from './NavBar/NavBar';
import SearchBar from '../common/SearchBar/SearchBar';
import UserBar from './UserBar/UserBar';
import PropTypes from 'prop-types';
import './Header.scss';

export function Header(props) {
	const { productsInCart, onChange, searchTerm } = props;

	return (
		<>
			<header className='main-header'>
				<h1 className='visually-hidden'>Online beauty store</h1>
				<Logo />
				<NavBar />
				<SearchBar onChange={onChange} searchTerm={searchTerm} />
				<UserBar productsInCart={productsInCart} />
			</header>
			<SearchBar onChange={onChange} searchTerm={searchTerm} mobile />
		</>
	);
}

Header.propTypes = {
	productsInCart: PropTypes.number,
};
