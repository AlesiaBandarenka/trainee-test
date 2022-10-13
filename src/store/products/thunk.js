import { getProducts } from '../services';
import {
	productsGetError,
	productsGetLoading,
	productsGetSuccess,
} from './actionCreators';

export function productsGet() {
	return async (dispatch) => {
		dispatch(productsGetLoading());
		try {
			const res = await getProducts();
			dispatch(productsGetSuccess(res.data.data));
		} catch (error) {
			dispatch(productsGetError(error));
		}
	};
}
