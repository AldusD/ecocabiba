import { type Application } from 'express';
import { routeRegistry } from './routeDecorator.js';

export function AppRoutes<T extends new (...args: any[]) => any>(target: T): T {
  const original = target;

  const decorated = class extends original {
    constructor(...args: any[]) {
      super(...args);

      const app: Application = (this as any).app;

      for (const { prefix, router } of routeRegistry) {
        app.use(prefix, router);
        console.log(`✅ Mounted routes for: ${prefix}`);
      }
    }
  };

  return decorated as unknown as T;
}
