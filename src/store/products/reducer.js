import * as actionTypes from './actionTypes';

const productsInitialState = {
	products: [],
	showSuccessModal: false,
};

const executeGetProductsSuccess = (state, action) => {
	return {
		...state,
		products: action.products,
	};
};

const reducer = (state = productsInitialState, action) => {
	switch (action.type) {
		case actionTypes.GET_PRODUCTS_SUCCESS:
			return executeGetProductsSuccess(state, action);
		default:
			return state;
	}
};

export default reducer;
