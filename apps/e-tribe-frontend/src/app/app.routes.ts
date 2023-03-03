import { Route } from '@angular/router';
import {authRoutes} from "@e-tribe-project/auth";

export const appRoutes: Route[] = [{path : 'auth', children : authRoutes}];
