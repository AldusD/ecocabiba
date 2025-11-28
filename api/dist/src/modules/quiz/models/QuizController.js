import {} from "express";
export class QuizController {
    authService;
    constructor(authService = new AuthService()) {
        this.authService = authService;
    }
    registerAttempt(req, res) {
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
//# sourceMappingURL=QuizController.js.map