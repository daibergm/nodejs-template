import { Application, Router } from 'express';
import { PingController } from '../controllers/PingController/PingController';
import { IndexController } from '../controllers/IndexController/IndexController';

const _routes: [string, Router][] = [
  ['/', IndexController],
  ['/ping', PingController],
];

/**
 * Add each route to Express instance
 * @param {Application} app Express instance
 */
export const routes = (app: Application) => _routes.forEach((route) => {
  const [url, controller] = route;
  app.use(url, controller);
});
