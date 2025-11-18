import { type Request, type Response } from "express";

export class QuizController {
    constructor(private authService: AuthService = new AuthService()) {}

    registerAttempt (req: Request, res: Response) {
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