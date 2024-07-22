import postController from '../controllers/postController.js';

import express from 'express';

const postRouter = express.Router();

postRouter.post('/createpost', postController.store);
postRouter.get('/index', postController.index);
postRouter.delete('/delete?:id', postController.delete);
postRouter.get('/show?:id', postController.show);
postRouter.post('/update?:id',postController.update);

export default postRouter