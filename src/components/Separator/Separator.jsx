import React from 'react';

import PropTypes from 'prop-types';
import './Separator.scss';

export function Separator({ title, link }) {
	return (
		<div className='main-separator'>
			<h2 className='main__separator-title'>{title}</h2>
			<div className='main__separator-wrap'>
				<a href='#' className='main__separator-link'>
					{link}
				</a>
			</div>
		</div>
	);
}

Separator.propTypes = {
	title: PropTypes.string,
	link: PropTypes.string,
};
