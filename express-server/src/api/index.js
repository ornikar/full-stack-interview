import { Router } from 'express';
import { getSessionsForDay } from '../codengo';

export default () => {
	const api = Router();

	api.get('/sessions', (req, res) => {
    const day = req.query.day ?
      Date.parse(req.query.day) :
      new Date();

    return res.json(getSessionsForDay(day));
	});

	return api;
}
