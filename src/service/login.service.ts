import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { LoginResponse } from '../app/types/login-response.type';
import { tap } from 'rxjs';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL_API = `${environment.user}`
  private httpClient = inject(HttpClient);


  constructor() { }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('auth-token'); // Retorna true se o token estiver presente
  }

  login(email: string, password: string) {
    return this.httpClient.post<LoginResponse>(this.URL_API + '/login', { email , password })
    .pipe(
      tap((value) => {
        sessionStorage.setItem("auth.token", value.token)
        sessionStorage.setItem("username", value.name)
      })
    );
  }
  signup(name: string, email: string, password: string) {
    return this.httpClient.post<LoginResponse>(this.URL_API + '/register', { name, email , password })
    .pipe(
      tap((value) => {
        sessionStorage.setItem("auth.token", value.token)
        sessionStorage.setItem("username", value.name)
      })
    );
  }
}
