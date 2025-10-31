import { Router } from 'express';

export interface RouteDefinition {
  prefix: string;
  router: Router;
}

export const routeRegistry: RouteDefinition[] = [];

export function Route(prefix: string): ClassDecorator {
  return function (target: any) {
    const instance = new target();

    if (!instance.router) {
      throw new Error(`Class ${target.name} must define a 'router' property`);
    }

    routeRegistry.push({
      prefix,
      router: instance.router,
    });
  };
}
