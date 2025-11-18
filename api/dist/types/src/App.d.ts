import './modules/auth/AuthRoutes.js';
export default class App {
    private app;
    private port;
    private authRouter;
    private recycleRouter;
    constructor(port?: number);
    setupRoutes(): void;
    start(): void;
}
//# sourceMappingURL=App.d.ts.map