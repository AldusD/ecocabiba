import {} from "express";
import { AuthService } from "./AuthService.js";
export class AuthController {
    authService;
    constructor(authService = new AuthService()) {
        this.authService = authService;
    }
    login(req, res) {
        try {
            const email = "aa@aa.com";
            const password = "topSecret";
            const token = this.authService.authUser(email, password);
            res.json({ token });
        }
        catch {
            res.status(400).send({ error: "Invalid credentials" });
        }
    }
}
//# sourceMappingURL=AuthController.js.map