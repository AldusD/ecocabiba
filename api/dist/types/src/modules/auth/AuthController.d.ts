import { type Request, type Response } from "express";
import { AuthService } from "./AuthService.js";
export declare class AuthController {
    private authService;
    constructor(authService?: AuthService);
    login(req: Request, res: Response): void;
}
//# sourceMappingURL=AuthController.d.ts.map