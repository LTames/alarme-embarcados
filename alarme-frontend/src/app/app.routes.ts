import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'motion-data',
  },
  {
    path: 'motion-data',
    loadChildren: () =>
      import('./features/motion-data/motion-data.routes').then(
        (r) => r.MOTION_DATA_ROUTES,
      ),
  },
];
