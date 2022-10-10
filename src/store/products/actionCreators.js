import * as actionTypes from './actionTypes';
import axios from '../services';

const getProductsSuccess = (products) => {
	return {
		type: actionTypes.GET_PRODUCTS_SUCCESS,
		products: products,
	};
};

export const getProducts = () => {
	return (dispatch) => {
		axios
			.get(`https://fakerapi.it/api/v1/products`, {
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Credentials': 'true',
					'Access-Control-Allow-Methods': 'GET',
					'Access-Control-Allow-Headers':
						'Origin, X-Requested-With, Content-Type, Accept, Authorization',
				},
			})
			.then((response) => {
				dispatch(getProductsSuccess(response));
			})
			.catch((error) => {
				console.log(error);
			});
	};
};
// axios.get(`https://fakerapi.it/api/v1/products`).then((res) => {
// 		const productsRes = res.data;
// 		setProducts(productsRes);
// 		console.log(productsRes);
// 	});
