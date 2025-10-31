import express, { type Application } from 'express';
import { AppRoutes } from './resources/decorator/appRoutesDecorator.js';



// Theese imports forces decorator @AppRoutes render routes, this is not desired, if youre able to fix it, please do :)
import './modules/auth/AuthRoutes.js';

@AppRoutes
export default class App {
  private app: Application;
  private port: number;

  constructor(port = 8080) {
    this.app = express();
    this.port = port;
    this.setupRoutes();
  }

  setupRoutes() {
    this.app.get('/', (req: any, res: any) => {
      res.json({ message: 'Hello World' });
    });
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server running on http://localhost:${this.port}`);
    });
  }
}

const app = new App(8080);
app.start();