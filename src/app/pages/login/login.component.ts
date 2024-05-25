import { Component, inject } from '@angular/core';
import { DefaulLoginComponent } from '../../components/defaul-login/defaul-login.component';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../../service/login.service';
import { LoginResponse } from '../../types/login-response.type';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DefaulLoginComponent, ReactiveFormsModule, PrimaryInputComponent, CommonModule],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup;
  loading: boolean = false;

  private router = inject(Router);
  private loginService = inject(LoginService);


  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  submitLogin() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
        next: (response: LoginResponse) => {
          this.loading = true;
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 1000);
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          this.loading = false;
        }
      });


    } else {
      console.error('Form is invalid');
    }
  }

  submitRegister() {

  }
}
