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
