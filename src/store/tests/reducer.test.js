import products from '../products/reducer';
import productsGet from '../products/thunk';
import mockedProducts from '../mockedData';

describe('how work reducer', () => {
	it('should return the initial state', () => {
		expect(products(undefined, {})).toEqual({
			products: [],
		});
	});

	it('should handle PRODUCTS_GET and returns new state', () => {
		const previousProductsInitialState = [];
		expect(products(previousProductsInitialState, productsGet())).toEqual(
			mockedProducts
		);
	});
});
