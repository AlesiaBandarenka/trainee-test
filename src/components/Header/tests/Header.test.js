import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Header from '../../Header/Header';
import { mockedStore } from '../../../mockData';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUsedNavigate,
}));

describe('Logo', () => {
	it('renders logo image', () => {
		render(
			<Provider store={mockedStore}>
				<Header />
			</Provider>
		);
		expect(screen.getByAltText(/Logo/i)).toBeInTheDocument();
	});
});
