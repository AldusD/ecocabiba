import express, { type Application } from 'express';
import { AppRoutes } from './resources/decorator/appRoutesDecorator.js';
import {AuthRoutes} from './modules/auth/AuthRoutes.js'
import { RecycleRoutes } from './modules/recycles/RecycleRoutes.js';
import dotenv from 'dotenv';
dotenv.config();

// Theese imports forces decorator @AppRoutes render routes, this is not desired, if youre able to fix it, please do :)
import './modules/auth/AuthRoutes.js';
import './modules/recycles/RecycleRoutes.js';


@AppRoutes
export default class App {
  private app: Application;
  private port: number;
  private authRouter = new AuthRoutes();

  constructor(port = 8080) {
    this.app = express();
    this.port = port;
    this.app.use(express.json());
    this.setupRoutes();
  }

  setupRoutes() {
    this.app.get('/', (req: any, res: any) => {
      res.json({ message: 'Hello World' });
    });
    this.app.use('/auth', this.authRouter.router);
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server running on http://localhost:${this.port}`);
    });
  }
}

const app = new App(8080);
app.start();