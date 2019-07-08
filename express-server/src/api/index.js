import { Router } from 'express';

export default () => {
	const api = Router();

	api.get('/sessions', (req, res) => {
    res.json([]);
	});

	return api;
}
