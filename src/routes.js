import { Router } from 'express';
/**
 * use this area to import your controllers
 */

const routes = new Router();

/**
 * Use this area to add your routes
 * ex: routes.get('/', ExampleController.index);
 */

// remove this route
routes.get('/', (req, res) => {
  return res.json({ msg: "I'm working..." });
});

export default routes;
