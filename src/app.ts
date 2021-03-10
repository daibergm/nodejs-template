import express, { Application } from 'express';
import { routes } from './routes/';

// Initialize express
export const app: Application = express();

// Application routing
routes(app);
