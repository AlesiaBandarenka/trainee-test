import React from 'react';

import PropTypes from 'prop-types';

import ProductCard from './ProductCard/ProductCard';

import './ProductList.scss';

export function ProductList(props) {
	const { onClick, filteredProducts } = props;

	return (
		<ul className='main__products-list'>
			{filteredProducts.map((product) => (
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

ProductList.propTypes = {
	onClick: PropTypes.func,
};
