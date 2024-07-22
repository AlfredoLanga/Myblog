import commentController from '../controllers/commentController.js';

import express from 'express';

const comementRouter = express.Router();

comementRouter.post('/createcomment', commentController.store);
comementRouter.get('/index', commentController.index);
comementRouter.delete('/delete?:id', commentController.delete);
comementRouter.post('/update?:id',commentController.update);

export default comementRouter