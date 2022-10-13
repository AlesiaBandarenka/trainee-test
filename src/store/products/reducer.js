import { actionTypes } from './actionTypes';

const productsInitialState = {
	products: [],
};

const products = (state = productsInitialState, action) => {
	switch (action.type) {
		case actionTypes.PRODUCTS_GET.LOADING:
			return { ...state, loading: true, error: null };
		case actionTypes.PRODUCTS_GET.SUCCESS:
			return { ...state, loading: false, products: action.payload };
		case actionTypes.PRODUCTS_GET.ERROR:
			return { ...state, loading: false, error: action.payload };

		default:
			return state;
	}
};

export default products;
