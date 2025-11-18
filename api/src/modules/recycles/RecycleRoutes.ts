import { Router } from "express";
import { RecycleController } from "./RecycleController.js";

export class AuthRoutes {
    public router = Router();
    private authController = new RecycleController();

    constructor () {
        this.router.post('/check-recycle',(req,res) => this.authController.checkRecycle(req,res));
    }
}