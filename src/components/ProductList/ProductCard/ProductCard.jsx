import React from 'react';

import './ProductCard.scss';

function ProductCard(props) {
	const { id, title, description, price, image } = props;
	return (
		<li class='card-list-container__item'>
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
							className='card-item__button card-item__button--cart button'
							type='button'
						>
							<span className='visually-hidden'>Добавить в корзину.</span>
						</button>
					</div>
				</div>
			</div>
		</li>
	);
}
export default ProductCard;
