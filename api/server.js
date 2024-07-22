import dotenv from 'dotenv';
import express from 'express';
import userRouter from './src/routes/userRoutes.js';
import postRouter from './src/routes/postRoutes.js';
import tagRouter from './src/routes/tagRoutes.js';
import commentRouter from './src/routes/commentRoutes.js'
import roleRouter from './src/routes/roleRoutes.js'
import fotoRouter from './src/routes/fotoRoutes.js';
import cors from 'cors';

dotenv.config()

const app = express();
const port = process.env.SERVER || 3000;

app.use(express.json());
app.use(cors());
app.use('/user',userRouter);
app.use('/post',postRouter);
app.use('/tag',tagRouter);
app.use('/comment', commentRouter);
app.use('/role', roleRouter);
app.use('/foto', fotoRouter);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
