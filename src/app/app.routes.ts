import { Routes } from '@angular/router';

//LAYOUT
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

import { roleGuard } from './guards/role-guard';

//ROUTES
import {studentRoute}  from "./routes/student.route";
import {adminRoute}  from "./routes/admin.route";
import {superAdminRoutes}  from "./routes/super-admin.route";

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        children: studentRoute,
        canActivate: [roleGuard],
        data: {
          role: 'student'
        }
      },
      {
        path: 'admin',
        children: adminRoute,
        canActivate: [roleGuard],
        data: {
          role: 'admin'
        }
      },
          {
        path: 'super-admin',
        children: superAdminRoutes,
        canActivate: [roleGuard],
        data: {
          role: 'super-admin'
        }
      }



    ]
  },
];
