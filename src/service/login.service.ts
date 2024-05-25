import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { LoginResponse } from '../app/types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private httpClient = inject(HttpClient);

  constructor() { }

  login(email: string, password: string) {
    return this.httpClient.post<LoginResponse>("/login", { email , password })
    .pipe(
      tap((value) => {
        sessionStorage.setItem("auth.token", value.token)
        sessionStorage.setItem("username.token", value.user)
      })
    );
  }
}
