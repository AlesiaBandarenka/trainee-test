import axios from '../store/axios';

export const getProducts = () =>
	axios.get(`https://fakerapi.it/api/v1/products`, {
		headers: {
			'Access-Control-Allow-Credentials': true,
			'Access-Control-Allow-Headers':
				'Content-Type, Authorization, X-Requested-With',
			'Access-Control-Max-Age': 86400,
			'Cache-Control': 'no-cache, private',
			// Connection: 'keep-alive',
			'Content-Encoding': 'gzip',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET',
		},
	});
