import { Router } from "express";
import { RecycleController } from "./RecycleController.js";
export class RecycleRoutes {
    router = Router();
    recycleController = new RecycleController();
    constructor() {
        this.router.post('/check-recycle', (req, res) => this.recycleController.checkRecycle(req, res));
    }
}
//# sourceMappingURL=RecycleRoutes.js.map