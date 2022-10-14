import React from 'react';

import PropTypes from 'prop-types';

import './ProductCard.scss';

function ProductCard(props) {
	const { id, title, description, price, image, onClick, onTouchEnd } = props;

	return (
		<li className='card-list-container__item'>
			<div className='card-item'>
				<a className='card-item__link' href='#'>
					<img
						className='card-item__img'
						src={image}
						alt='Product'
						width='246px'
						height='332px'
					/>
				</a>
				<div className='card-item__info'>
					<div className='card-item__column--info'>
						<h3 className='card-item__title' id={id}>
							{title}
						</h3>
						<div className='card-item__description'>{description}</div>
						<p className='card-item__price'>${price}</p>
					</div>
					<div className='card-item__column--button'>
						<button
							className='card-item__button'
							type='button'
							onClick={onClick}
							onTouchEnd={onTouchEnd}
						>
							<span className='visually-hidden'>Добавить в корзину.</span>
						</button>
					</div>
				</div>
			</div>
		</li>
	);
}

ProductCard.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	description: PropTypes.string,
	price: PropTypes.string,
	image: PropTypes.string,
	onClick: PropTypes.func,
};

export default ProductCard;
