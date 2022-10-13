import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsSel } from '../../store/selectors';
import { productsGet } from '../../store/products/thunk';

function Test() {
	const products = useSelector(getProductsSel);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(productsGet());
	}, [dispatch]);
	console.log(products);

	return (
		<div className='main'>
			<p>hi</p>
		</div>
	);
}
export default Test;
