import express, { Application } from 'express';


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