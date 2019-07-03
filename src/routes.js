import { Router } from 'express';
/**
 * use this area to import your controllers
 */

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

/**
 * Use this area to add your routes
 * ex: routes.get('/', ExampleController.index);
 */

routes.get('/sessions', SessionController.store);
routes.get('/users', UserController.index);

routes.use(authMiddleware);
/**
 * All routes bellow routes.use(authMiddleare) need to be authenticate with the TOKEN
 */

export default routes;
