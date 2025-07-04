import express, { ErrorRequestHandler } from 'express';
import { linkRouter } from './link/link.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';
const app = express();
app.use(express.json())
app.use('/shorten', linkRouter);

app.use(errorHandler as ErrorRequestHandler)
app.listen(3000, () => {
    console.log("Server listening on port 3000")
})