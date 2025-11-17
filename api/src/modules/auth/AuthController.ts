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
    };

    register (req: Request, res: Response) {
        try {
            const email = "aa@aa.com";
            const password = "topSecret";
            const cpf = "000.000.000-00";
            const name = "Test name da lima silva";
            const invitationCode = "test23A"
            const token = this.authService.registerUser(email, password, cpf, name, invitationCode);
            res.json({ token });
        } catch(err: any) {
            res.status(400).send({ error: err });
        }
    }
}