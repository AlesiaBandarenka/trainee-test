import React from 'react';

import './Button.scss';

import PropTypes from 'prop-types';

function Button({ buttonText }) {
	return (
		<div className='btn'>
			<a href='#' className='btn-link'>
				{buttonText}
			</a>
		</div>
	);
}

Button.propTypes = {
	buttonText: PropTypes.string,
};

export default Button;
