import { NextFunction, Request, Response, Router } from 'express';
export const IndexController: Router = Router();

IndexController.get('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send({ data: 'Hello World!' });
  } catch (error) {
    next(error);
  }
});
