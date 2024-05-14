import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (this.isUsuarioLogado()) {
      return true; // Retorne true se o usuário estiver logado ou false se não estiver logado
      // Redireciona para o login se não estiver logado
    } else {
      this.router.navigate(['/login']); // Redireciona para o login se não estiver logado
      return false;
    }
  }

  isUsuarioLogado() {
    return true; // Retorne true se o usuário estiver logado ou false se não estiver logado
  }
}
