// import * as actionTypes from './actionTypes';
// import axios from '../axios';

// const getProductsSuccess = (products) => {
// 	return {
// 		type: actionTypes.GET_PRODUCTS_SUCCESS,
// 		products: products,
// 	};
// };

// export const getProducts = () => {
// 	return (dispatch) => {
// 		axios
// 			.get(`https://fakerapi.it/api/v1/products`, {
// 				headers: {
// 					'Access-Control-Allow-Credentials': true,
// 					'Access-Control-Allow-Headers':
// 						'Content-Type, Authorization, X-Requested-With',

// 					'Access-Control-Max-Age': 86400,
// 					'Cache-Control': 'no-cache, private',
// 					Connection: 'keep-alive',
// 					'Content-Encoding': 'gzip',
// 					'Content-Type': 'application/json',
// 					'Access-Control-Allow-Origin': '*',
// 					'Access-Control-Allow-Methods': 'GET',
// 					// 'Access-Control-Allow-Headers':
// 					// 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
// 				},
// 			})
// 			.then((response) => {
// 				dispatch(getProductsSuccess(response));
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
// 	};
// };
// axios.get(`https://fakerapi.it/api/v1/products`).then((res) => {
// 		const productsRes = res.data;
// 		setProducts(productsRes);
// 		console.log(productsRes);
// 	});

import { actionTypes } from './actionTypes';

export function productsGetLoading() {
	return { type: actionTypes.PRODUCTS_GET.LOADING };
}
export function productsGetSuccess(products) {
	return { type: actionTypes.PRODUCTS_GET.SUCCESS, payload: products };
}
export function productsGetError(error) {
	return { type: actionTypes.PRODUCTS_GET.ERROR, payload: error };
}
