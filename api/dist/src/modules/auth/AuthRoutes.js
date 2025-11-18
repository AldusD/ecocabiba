import { Router } from "express";
import { AuthController } from "./AuthController.js";
import { Route } from "../../resources/decorator/routeDecorator.js";
export class AuthRoutes {
    router = Router();
    authController = new AuthController();
    constructor() {
        this.router.post('/login', (req, res) => this.authController.login(req, res));
        this.router.post('/register', (req, res) => this.authController.register(req, res));
    }
}
//# sourceMappingURL=AuthRoutes.js.map