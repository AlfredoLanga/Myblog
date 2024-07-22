import { Router } from 'express';

import fotoController from '../controllers/fotoController';

const fotoRouter = new Router();

fotoRouter.post('/', fotoController.store);

export default fotoRouter;
