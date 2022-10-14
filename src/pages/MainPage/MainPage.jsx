import React, { useState, useEffect } from 'react';

import { Header } from '../../components/Header/Header';
import { Promo } from '../../components/Promo/Promo';
import { Separator } from '../../components/Separator/Separator';
import { ProductList } from '../../components/ProductList/ProductList';

import { useSelector, useDispatch } from 'react-redux';
import { getProductsSel } from '../../store/selectors';
import { productsGet } from '../../store/products/thunk';

import './MainPage.scss';

export function MainPage() {
	const [counter, setCounter] = useState(0);
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const products = useSelector(getProductsSel);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(productsGet());
	}, [dispatch]);

	const inc = () => setCounter(counter + 1);

	const handleChange = (event) => {
		setSearchTerm(event.target.value);
	};

	useEffect(() => {
		const results = products.filter((product) =>
			product.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setSearchResults(results);
	}, [searchTerm, products]);

	return (
		<div className='container'>
			<Header
				productsInCart={counter}
				onChange={handleChange}
				searchTerm={searchTerm}
			/>
			<Promo />
			<Separator title='Best Selling Products' />
			<ProductList
				onClick={inc}
				onTouchEnd={inc}
				filteredProducts={searchResults}
			/>
		</div>
	);
}
