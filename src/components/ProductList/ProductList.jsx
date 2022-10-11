import React from 'react';

import ProductCard from './ProductCard/ProductCard';

import { products } from '../../store/mockedData';

import './ProductList.scss';

export function ProductList(props) {
	const { onClick } = props;
	return (
		<ul className='main__products-list'>
			{products.map((product) => (
				<ProductCard
					key={product.id.toString()}
					id={product.id}
					image={product.image}
					title={product.name}
					description={product.description}
					price={product.price}
					onClick={onClick}
				/>
			))}
		</ul>
	);
}
