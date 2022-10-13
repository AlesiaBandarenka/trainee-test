import React from 'react';
import { screen, render } from '@testing-library/react';
import ProductCard from '../ProductCard';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { mockedStore } from '../../../../store/mockedData';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUsedNavigate,
}));

describe('ProductCard', () => {
	it('renders ProductCard title', () => {
		render(
			<Provider store={mockedStore}>
				<ProductCard id='1' title='Ut labore quas commodi' price='0.01' />
			</Provider>
		);
		expect(screen.getByTestId('testTitle').toBeInTheDocument);
	});
	it('renders ProductCard description', () => {
		render(
			<Provider store={mockedStore}>
				<ProductCard
					id='1'
					description='Magni at rerum id sunt molestiae commodi. Ex quibusdam sint fugit autem quo. Nisi quos alias facere.'
				/>
			</Provider>
		);
		expect(screen.getByTestId('testDescription').toBeInTheDocument);
	});
	it('renders ProductCard price', () => {
		render(
			<Provider store={mockedStore}>
				<ProductCard id='1' price='0.01' />
			</Provider>
		);
		expect(screen.getByTestId('testDuration').toBeInTheDocument);
	});
});
