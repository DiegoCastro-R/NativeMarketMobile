import { Router } from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import categoryRouter from './category.routes';
import productRouter from './products.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/categorys', categoryRouter);
routes.use('/products', productRouter);

export default routes;
