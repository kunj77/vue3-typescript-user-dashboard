import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import createError from 'http-errors';

// Express Route
import userRoute from './src/user.route';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', userRoute);

// PORT
const port = 3000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port);
});

// 404 Error
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

const errorHandler: ErrorRequestHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
};

app.use(errorHandler);

export default app;
