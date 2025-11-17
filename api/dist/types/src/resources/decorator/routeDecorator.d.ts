import { Router } from 'express';
export interface RouteDefinition {
    prefix: string;
    router: Router;
}
export declare const routeRegistry: RouteDefinition[];
export declare function Route(prefix: string): ClassDecorator;
//# sourceMappingURL=routeDecorator.d.ts.map