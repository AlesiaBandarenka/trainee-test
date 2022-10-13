import React from 'react';

import './SearchBar.scss';

function SearchBar(props) {
	const { onChange, searchTerm } = props;

	return (
		<input
			type='text'
			className={`main-header__search ${props.mobile ? 'mobile' : ''}`}
			placeholder='Search for products'
			onChange={onChange}
			value={searchTerm}
			required
		/>
	);
}
export default SearchBar;
