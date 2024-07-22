import roleController from '../controllers/roleController.js';

import express from 'express';

const roleRouter = express.Router();

roleRouter.post('/createrole', roleController.store);
roleRouter.get('/index', roleController.index);


export default roleRouter