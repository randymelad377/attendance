import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from "../services/user-service";
type UserRole = 'student' | 'admin' | 'super-admin';

export const roleGuard: CanActivateFn = (route) => {
  const router = inject(Router);

  const requiredRole = route.data['role'] as UserRole;
  const userService = inject(UserService);

  const userRole = userService.getUser().role;

  if (userRole === requiredRole) {
    return true;
  }

  switch (userRole) {
    case 'student':
      return router.createUrlTree(['/student']);

    case 'admin':
      return router.createUrlTree(['/admin']);

    case 'super-admin':
      return router.createUrlTree(['/super-admin']);

    default:
      return router.createUrlTree(['/login']);
  }
};
