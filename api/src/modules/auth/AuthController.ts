import { type Request, type Response } from "express";
import { AuthService } from "./AuthService.js";

export class AuthController {
    constructor(private authService: AuthService = new AuthService()) {}

    login (req: Request, res: Response) {
        try {
            const email = "aa@aa.com";
            const password = "topSecret";
            const token = this.authService.authUser(email, password);
            res.json({ token });
        } catch {
            res.status(400).send({ error: "Invalid credentials" });
        }
    }
}