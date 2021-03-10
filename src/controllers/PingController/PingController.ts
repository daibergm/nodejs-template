import { Request, Response, Router } from 'express';
export const PingController: Router = Router();

PingController.get('/', (req: Request, res: Response) => res.status(200).send({ data: 'Pong!' }));
