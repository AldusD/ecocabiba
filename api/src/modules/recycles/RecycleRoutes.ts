import { Router } from "express";
import { RecycleController } from "./RecycleController.js";

export class RecycleRoutes {
    public router = Router();
    private recycleController = new RecycleController();

    constructor () {
        this.router.post('/check-recycle',(req,res) => this.recycleController.checkRecycle(req,res));
    }
}