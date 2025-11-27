import './modules/auth/AuthRoutes.js';
import './modules/recycles/RecycleRoutes.js';
export default class App {
    private app;
    private port;
    private authRouter;
    constructor(port?: number);
    setupRoutes(): void;
    start(): void;
}
//# sourceMappingURL=App.d.ts.map