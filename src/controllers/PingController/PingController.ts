import { NextFunction, Request, Response, Router } from 'express';
export const PingController: Router = Router();

PingController.get('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send({ data: 'Pong!' });
  } catch (error) {
    next(error);
  }
});
