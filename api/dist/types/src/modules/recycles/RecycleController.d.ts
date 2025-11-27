import { type Request, type Response } from "express";
import { RecycleService } from "./RecycleService.js";
export declare class RecycleController {
    private recycleService;
    constructor(recycleService?: RecycleService);
    checkRecycle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    create(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=RecycleController.d.ts.map