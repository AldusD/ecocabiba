var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import express, {} from 'express';
import { AppRoutes } from './resources/decorator/appRoutesDecorator.js';
import { AuthRoutes } from './modules/auth/AuthRoutes.js';
import { RecycleRoutes } from './modules/recycles/RecycleRoutes.js';
import dotenv from 'dotenv';
dotenv.config();
// Theese imports forces decorator @AppRoutes render routes, this is not desired, if youre able to fix it, please do :)
import './modules/auth/AuthRoutes.js';
import './modules/recycles/RecycleRoutes.js';
let App = class App {
    app;
    port;
    authRouter = new AuthRoutes();
    constructor(port = 8080) {
        this.app = express();
        this.port = port;
        this.app.use(express.json());
        this.setupRoutes();
    }
    setupRoutes() {
        this.app.get('/', (req, res) => {
            res.json({ message: 'Hello World' });
        });
        this.app.use('/auth', this.authRouter.router);
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`Server running on http://localhost:${this.port}`);
        });
    }
};
App = __decorate([
    AppRoutes
], App);
export default App;
const app = new App(8080);
app.start();
//# sourceMappingURL=App.js.map