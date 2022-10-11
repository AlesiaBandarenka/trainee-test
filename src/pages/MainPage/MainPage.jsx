import React from 'react';

import { Header } from '../../components/Header/Header';
import { Promo } from '../../components/Promo/Promo';
import { Separator } from '../../components/Separator/Separator';
import { ProductList } from '../../components/ProductList/ProductList';

import './MainPage.scss';

export function MainPage() {
	return (
		<div className='container'>
			<Header />
			<Promo />
			<Separator title='Best Selling Products' link='View All Products' />
			<ProductList />
		</div>
	);
}
