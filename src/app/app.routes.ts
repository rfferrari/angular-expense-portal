import { Routes } from '@angular/router';
import { authGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'reimbursements' },

  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES),
  },

  {
    path: 'reimbursements',
    canMatch: [authGuard],
    loadChildren: () =>
      import('./features/reimbursements/reimbursements.routes').then(m => m.REIMBURSEMENTS_ROUTES),
  },

  { path: '**', redirectTo: 'reimbursements' }, // ou crie uma NotFoundPage
];