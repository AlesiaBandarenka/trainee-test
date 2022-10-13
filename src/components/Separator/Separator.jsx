import React from 'react';

import PropTypes from 'prop-types';
import './Separator.scss';

export function Separator({ title }) {
	return (
		<div className='main-separator'>
			<h2 className='main__separator-title'>{title}</h2>
		</div>
	);
}

Separator.propTypes = {
	title: PropTypes.string,
};
