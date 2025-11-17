import {} from "express";
import { AuthService } from "./AuthService.js";
export class AuthController {
    authService;
    constructor(authService = new AuthService()) {
        this.authService = authService;
    }
    login(req, res) {
        try {
            const { email, password } = req.body;
            const token = this.authService.authUser(email, password);
            res.json({ token });
        }
        catch {
            res.status(400).send({ error: "Invalid credentials" });
        }
    }
    ;
    register(req, res) {
        try {
            const { email, password, cpf, name } = req.body;
            const token = this.authService.registerUser(email, password, cpf, name);
            res.json({ token });
        }
        catch (err) {
            res.status(400).send({ error: err });
        }
    }
}
//# sourceMappingURL=AuthController.js.map