import { CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanMatchFn = () => {
  const router = inject(Router);

  // TODO: troque por um AuthService de verdade depois
  const isLoggedIn = localStorage.getItem('token') !== null;

  if (!isLoggedIn) {
    router.navigateByUrl('/auth/login');
    return false;
  }

  return true;
};