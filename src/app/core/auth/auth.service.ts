import { Injectable, signal } from '@angular/core';

type UserRole = 'USER' | 'ADMIN';

export interface AuthUser {
  name: string;
  role: UserRole;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'token';
  private readonly USER_KEY = 'auth_user';

  isLoggedIn = signal<boolean>(this.hasToken());

  private hasToken(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  loginFake(email: string): void {
    const role: UserRole = email.toLowerCase().includes('admin') ? 'ADMIN' : 'USER';

    localStorage.setItem(this.TOKEN_KEY, 'fake-token');
    localStorage.setItem(this.USER_KEY, JSON.stringify({ name: email, role } satisfies AuthUser));

    this.isLoggedIn.set(true);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.isLoggedIn.set(false);
  }

  getUser(): AuthUser | null {
    const raw = localStorage.getItem(this.USER_KEY);
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  }
}