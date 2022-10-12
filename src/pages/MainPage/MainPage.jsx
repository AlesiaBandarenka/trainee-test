import React, { useState } from 'react';

import { Header } from '../../components/Header/Header';
import { Promo } from '../../components/Promo/Promo';
import { Separator } from '../../components/Separator/Separator';
import { ProductList } from '../../components/ProductList/ProductList';

import './MainPage.scss';
// import Test from '../../components/Test/Test';

export function MainPage() {
	const [counter, setCounter] = useState(0);

	let inc = () => setCounter(counter + 1);

	return (
		<div className='container'>
			<Header productsInCart={counter} />
			<Promo />
			<Separator title='Best Selling Products' />
			<ProductList onClick={inc} />
			{/* <Test /> */}
		</div>
	);
}
