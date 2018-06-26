import { Router } from 'express';
import { getSessions } from '../codengo';

export default () => {
	const api = Router();

	api.get('/sessions', (req, res) => {
    res.json(getSessions({
      lng: req.body.lng,
      lat: req.body.lat,
    }));
	});

	return api;
}
