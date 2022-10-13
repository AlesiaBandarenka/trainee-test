import React from 'react';
import axios from 'axios';
import * as reactRedux from 'react-redux';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import MainPage from '../MainPage';
import '@testing-library/jest-dom';
import { products as mockedStore } from '../../../store/';
jest.mock('axios');

describe('Products', () => {
	const mockedUsedNavigate = jest.fn();
	jest.mock('react-router-dom', () => ({
		...jest.requireActual('react-router-dom'),
		useNavigate: () => mockedUsedNavigate,
	}));
	it('shows products', () => {
		render(
			<Provider store={mockedStore}>
				<MainPage />
			</Provider>
		);
		expect(screen.queryByText('labore').toBeInTheDocument());
	});
});
