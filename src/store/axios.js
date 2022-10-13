import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:3000',
	headers: {
		headerType: 'base url',
	},
});

export default instance;
