import express from 'express';
import path from 'path';
import indexRouter from './routes/index';
import loginRouter from './routes/login';
import registrationRouter from './routes/registration';

/**
 * Settings
 */
const app = express();
app.use(express.static(path.resolve('src/public/')));

/**
 * Routes
 */
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/registration', registrationRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000!');
});