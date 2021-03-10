import { Request, Response, Router } from 'express';
export const IndexController: Router = Router();

IndexController.get('/', (req: Request, res: Response) => res.status(200).send({ data: 'Hello World!' }));
