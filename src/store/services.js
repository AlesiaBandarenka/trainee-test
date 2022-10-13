import axios from 'axios';

export const getProducts = () =>
	axios.get(`https://fakerapi.it/api/v1/products`);
