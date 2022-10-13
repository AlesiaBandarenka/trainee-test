import React from 'react';

import './SearchBar.scss';

function SearchBar(props) {
	const { onChange, searchTerm } = props;

	return (
		<>
			<label htmlFor='search'></label>
			<input
				type='text'
				className='main-header__search'
				placeholder='Search for products'
				onChange={onChange}
				value={searchTerm}
				// onBlur={onBlur}
				required
			/>
		</>
	);
}
export default SearchBar;
